// Local addition (not upstream): `look` switches between the original dark
// presentation and a light one drawn for paper. See ocean-background.tsx.
struct Look {
  // 0 = dark (original: light particles, composited by screen onto the page)
  // 1 = light (ink dots and white glints, composited normally onto paper)
  mode: f32,
  // Light mode: how quickly accumulated particle light turns into ink.
  inkExposure: f32,
  // Light mode: ceiling on ink opacity, so the busiest crests stay grey.
  inkMax: f32,
  // Light mode: bloom gain for the white sheen around the crests.
  glowGain: f32,
  // Light mode: particle luminance band that turns into white glints.
  glintLow: f32,
  glintHigh: f32,
  _pad: vec2f,
  // Light mode: ink colour, sRGB.
  ink: vec4f,
};

@group(0) @binding(0) var sceneHDR: texture_2d<f32>;
@group(0) @binding(1) var bloomTexture: texture_2d<f32>;
@group(0) @binding(2) var linearSampler: sampler;
@group(0) @binding(3) var<uniform> look: Look;

fn LinearTosRGB(value: vec4f) -> vec4f {
  let lt = value.rgb * 12.92;
  let gt = 1.055 * pow(value.rgb, vec3f(0.41666)) - vec3f(0.055);
  let rgb = select(gt, lt, value.rgb <= vec3f(0.0031308));
  return vec4f(rgb, value.a);
}

fn luminance(rgb: vec3f) -> f32 {
  return dot(rgb, vec3f(0.299, 0.587, 0.114));
}

@fragment fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let scene = textureSample(sceneHDR, linearSampler, uv);
  let bloom = textureSample(bloomTexture, linearSampler, uv);

  if (look.mode < 0.5) {
    return LinearTosRGB(vec4f(scene.rgb + bloom.rgb, max(scene.a, bloom.a)));
  }

  // On paper you can only darken or lighten towards white, so the dark look's
  // single "light" channel is split in two. Ordinary particles become ink, with
  // an exponential ramp instead of a hard clip so dense crests saturate to grey
  // rather than black. The brightest particles and the bloom become white:
  // glints on the crest lines and a soft sheen around them, which is what reads
  // as shine against the paper.
  let sceneL = luminance(scene.rgb);
  let bloomL = luminance(bloom.rgb);

  let glint = smoothstep(look.glintLow, look.glintHigh, sceneL);
  let inkA = (1.0 - exp(-sceneL * look.inkExposure)) * look.inkMax;
  let dotColor = mix(look.ink.rgb, vec3f(1.0), glint);
  let glowA = clamp(bloomL * look.glowGain, 0.0, 0.75);

  // Premultiplied: sheen first, dots over it.
  var rgb = vec3f(glowA);
  var a = glowA;
  rgb = dotColor * inkA + rgb * (1.0 - inkA);
  a = inkA + a * (1.0 - inkA);
  return vec4f(rgb, a);
}
