
import { ArrowLeft, GraduationCap, BookOpen, Award, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const backgroundItems = [
  {
    id: "education",
    title: "Education",
    description: "Bachelor's in Computer Science from University of Technology",
    icon: <GraduationCap className="h-5 w-5" />,
    content: "Graduated with honors, focusing on software engineering and web development.",
    year: "2020"
  },
  {
    id: "certifications",
    title: "Certifications",
    description: "AWS Certified Developer, Google Cloud Professional",
    icon: <Award className="h-5 w-5" />,
    content: "Multiple cloud certifications and specialized training in modern web technologies.",
    year: "2021-2023"
  },
  {
    id: "learning",
    title: "Continuous Learning",
    description: "Always exploring new technologies and frameworks",
    icon: <BookOpen className="h-5 w-5" />,
    content: "Regular participation in online courses, workshops, and tech conferences.",
    year: "Ongoing"
  },
  {
    id: "experience",
    title: "Early Experience",
    description: "Started coding at 16, built first website at 18",
    icon: <Clock className="h-5 w-5" />,
    content: "Over 8 years of experience in web development and software engineering.",
    year: "2015-2023"
  }
]

export default function BackgroundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/about" className="flex items-center space-x-2 group">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to About</span>
            </div>
          </Link>
          
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Background
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {backgroundItems.map((item, index) => (
              <div
                key={item.id}
                className="group"
              >
                <Card className="h-full border-2 border-border bg-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {item.icon}
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {item.year}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
                      </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="absolute bottom-0 left-0 right-0 p-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-muted-foreground">
            My educational and professional journey
          </p>
                  </div>
        </footer>
    </div>
  )
}
