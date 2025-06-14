import { Mail, Phone, MapPin, Download, Award, Linkedin, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  const skills = [
    { name: 'Java', level: 90, category: 'Programming' },
    { name: 'Spring Boot', level: 85, category: 'Framework' },
    { name: 'Spring MVC', level: 85, category: 'Framework' },
    { name: 'JavaScript', level: 80, category: 'Programming' },
    { name: 'SQL', level: 85, category: 'Database' },
    { name: 'Python', level: 75, category: 'Programming' },
    { name: 'HTML/CSS', level: 80, category: 'Frontend' },
    { name: 'REST APIs', level: 90, category: 'Backend' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Docker', level: 70, category: 'Tools' },
  ];

  const projects = [
    {
      title: 'Account Management System',
      description: 'Built an automated account management system for both customers and administrators using Java and Spring-based technologies.',
      technologies: ['Java', 'Spring Boot', 'Spring MVC', 'Hibernate', 'JSP'],
      features: [
        'Core banking functionalities: deposit, withdrawal, transfer, balance inquiry',
        'Robust backend logic with seamless user experience',
        'Spring MVC for request handling and Hibernate for database operations'
      ]
    },
    {
      title: 'Speech Emotion Recognition',
      description: 'Developed a web application capable of displaying emotion of the user using speech, leveraging Python and Machine Learning.',
      technologies: ['Python', 'Machine Learning', 'Web Development'],
      features: [
        'Real-time emotion detection from speech',
        'Machine learning algorithms for accurate recognition',
        'Web-based interface for easy interaction'
      ]
    },
    {
      title: 'Virtual Mouse Control',
      description: 'Created a Virtual Mouse application using computer vision to control mouse position with hand gestures.',
      technologies: ['Python', 'Computer Vision', 'OpenCV'],
      features: [
        'Hand gesture recognition for cursor control',
        'Camera-based interaction without physical devices',
        'Real-time processing and smooth mouse control'
      ]
    }
  ];

  const certifications = [
    { name: 'MuleSoft Certified Developer - Level 1', issuer: 'MuleSoft' },
    { name: 'Experiential Project Based Learning', issuer: 'SSC Nasscom, ICTACADEMY' },
    { name: 'Virtual Internship Certificate - Android Development', issuer: 'NSIC' },
    { name: 'The Python Bible', issuer: 'Udemy' },
    { name: 'SQL for Beginners', issuer: 'Udemy' },
    { name: 'Complete Web Design', issuer: 'Udemy' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-6 right-6 z-50">
          <ThemeToggle />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 p-1 bg-gradient-to-r from-blue-400 to-purple-400">
                  <img 
                    src="/lovable-uploads/43cf3caa-e48d-46b8-be19-30f7af560558.png" 
                    alt="Galla Vishnu Sai Saketh - Software Engineer"
                    className="w-full h-full object-cover rounded-full bg-background"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
              </div>
            </div>

            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
                GALLA VISHNU SAI SAKETH
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-primary">
                Software Engineer - Java Specialist
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
                Experienced Software Engineer with nearly two years of hands-on experience in full software development lifecycle, 
                including design, development, testing, and deployment. Proficient in Java with strong expertise in Spring Boot, 
                Spring Framework, and RESTful web services.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-foreground">
              <div className="flex items-center gap-2 bg-primary/5 dark:bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Mail className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                <span>vishnusaisakethg@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/5 dark:bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Phone className="w-5 h-5 text-green-500 dark:text-green-400" />
                <span>8688973170</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/5 dark:bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="w-5 h-5 text-red-500 dark:text-red-400" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-primary-foreground px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => window.open('mailto:vishnusaisakethg@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-primary-foreground px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => window.open('https://drive.google.com/uc?export=download&id=1XfhPGDyuwh1KCZKkvbhDMdrUOMGubssj', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-primary-foreground px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => window.open('https://www.linkedin.com/in/galla-vishnu-sai-saketh-6b54481a0/', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-primary-foreground px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => window.open('https://github.com/saisaketh2282', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 dark:bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Professional Experience
          </h2>
          
          <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm border-border text-card-foreground">
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <CardTitle className="text-2xl text-primary mb-2">Software Engineer</CardTitle>
                  <p className="text-xl font-semibold">Tech Mahindra</p>
                  <p className="text-muted-foreground">Integration Team Client: NextEra Energy (US-based Utility Services)</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-purple-600 dark:text-purple-400">09/2023 - Present</p>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Worked as part of the integration team, responsible for designing, developing, and managing APIs to support enterprise-level energy management systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Provided regular production support activities, identifying and resolving errors in live APIs to ensure high system availability and reliability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborated on tech debt resolutions and implemented fixes to enhance system stability, maintainability, and scalability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Created <strong className="text-purple-600 dark:text-purple-400">Splunk</strong> reports and dashboards, reducing error resolution time by <strong className="text-green-600 dark:text-green-400">25%</strong> by enabling quicker identification of issues in live environments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Followed <strong className="text-purple-600 dark:text-purple-400">Agile methodology</strong>, actively participating in bi-weekly sprints, sprint planning, daily stand-ups, and retrospectives to drive project progress and ensure team alignment.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="mb-6 group">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <Badge variant="secondary">
                    {skill.category}
                  </Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-purple-500/50"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
                <span className="text-sm text-muted-foreground mt-1">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 dark:bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card backdrop-blur-sm border-border text-card-foreground hover:bg-primary/5 dark:hover:bg-white/5 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl text-primary mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2 text-purple-600 dark:text-purple-400">Key Features:</p>
                    <ul className="text-sm space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Certifications & Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card backdrop-blur-sm border-border text-card-foreground hover:bg-primary/5 dark:hover:bg-white/5 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Award className="w-8 h-8 text-yellow-500 dark:text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 dark:bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Education
          </h2>
          
          <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm border-border text-card-foreground">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Bachelor of Engineering in Computer Science And Engineering
                  </h3>
                  <p className="text-xl font-semibold">R.M.D Engineering College</p>
                  <p className="text-muted-foreground">Anna University</p>
                  <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">CGPA: 8.70</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-muted-foreground">08/2019 - 05/2023</p>
                  <p className="text-muted-foreground">Chennai, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to bring innovative solutions to your team. Let's discuss how my skills and experience can contribute to your organization's success.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-primary-foreground px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => window.open('mailto:vishnusaisakethg@gmail.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-primary-foreground px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => window.open('tel:8688973170', '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-transparent border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Galla Vishnu Sai Saketh. Crafted with passion for innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
