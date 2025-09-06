"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const programmingLanguages = [
    { name: "C++", level: 85, description: "Linguagem principal nos projetos da 42 Porto" },
    { name: "C", level: 80, description: "Base sólida em programação de sistemas" },
    { name: "JavaScript/TypeScript", level: 75, description: "Desenvolvimento web moderno" },
    { name: "Python", level: 70, description: "Scripts e automação" },
    { name: "Java", level: 65, description: "Programação orientada a objetos" },
    { name: "SQL", level: 70, description: "Gestão de bases de dados" },
  ]

  const technologies = ["React.js", "Next.js", "Node.js", ".NET Framework", "HTML", "CSS", "PHP", "Lua", "Figma"]

  const tools = ["Git", "VS Code", "Linux", "Docker", "Postman", "GitHub", "Vercel"]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Skills & Tecnologias</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Linguagens de Programação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {programmingLanguages.map((skill) => (
                  <div
                    key={skill.name}
                    className="space-y-2"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    {hoveredSkill === skill.name && (
                      <p className="text-sm text-muted-foreground animate-in slide-in-from-top-2">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Tecnologias & Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Ferramentas & Ambiente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="outline"
                      className="border-primary/30 hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
