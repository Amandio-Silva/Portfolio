import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "42-Piscine",
      description:
        "Conjunto de projetos desenvolvidos durante a Piscine da 42 Porto, focando em fundamentos de programação em C.",
      image: "/c-programming-code-terminal.jpg",
      technologies: ["C", "Shell", "Makefile"],
      github: "https://github.com/Amandio-Silva/42-Piscine",
      featured: true,
    },
    {
      title: "Libft",
      description: "Implementação de uma biblioteca pessoal em C, recriando funções essenciais da biblioteca padrão.",
      image: "/c-library-functions-code.jpg",
      technologies: ["C", "Makefile"],
      github: "https://github.com/Amandio-Silva/Libft",
    },
    {
      title: "Get_Next_Line",
      description: "Função que lê uma linha de um file descriptor, otimizada para eficiência de memória.",
      image: "/file-reading-c-programming.jpg",
      technologies: ["C", "File I/O"],
      github: "https://github.com/Amandio-Silva/Get_Next_Line",
    },
    {
      title: "Printf",
      description: "Reimplementação da função printf da biblioteca padrão C com suporte a vários especificadores.",
      image: "/printf-function-c-implementation.jpg",
      technologies: ["C", "Variadic Functions"],
      github: "https://github.com/Amandio-Silva/Printf",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Projetos em Destaque</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-accent/20 text-accent-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Amandio-Silva" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                Ver Todos os Projetos no GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
