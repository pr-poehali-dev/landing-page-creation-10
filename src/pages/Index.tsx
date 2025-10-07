import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const portfolioItems = [
    {
      title: 'Минималистичный брендинг',
      description: 'Создание фирменного стиля для технологического стартапа',
      category: 'Брендинг',
      image: '/placeholder.svg'
    },
    {
      title: 'E-commerce платформа',
      description: 'Разработка интернет-магазина с современным UX',
      category: 'Веб-дизайн',
      image: '/placeholder.svg'
    },
    {
      title: 'Мобильное приложение',
      description: 'UI/UX дизайн для финтех приложения',
      category: 'Веб-дизайн',
      image: '/placeholder.svg'
    }
  ];

  const services = [
    {
      icon: 'Sparkles',
      title: 'Брендинг',
      description: 'Разработка фирменного стиля, логотипа и брендбука для вашего бизнеса'
    },
    {
      icon: 'Monitor',
      title: 'Веб-дизайн',
      description: 'Создание современных сайтов и интернет-магазинов с фокусом на UX'
    },
    {
      icon: 'Palette',
      title: 'UI/UX дизайн',
      description: 'Проектирование интерфейсов приложений и digital-продуктов'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tight">NDA</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О студии</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="rounded-full px-6">Связаться</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center bg-[#D4CBC3]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center justify-center text-center">
            <img 
              src="https://cdn.poehali.dev/files/f95fcb10-094c-43e7-b006-d23f54f84fa5.png" 
              alt="NDA - Neuro.Design.Architecture"
              className="w-full max-w-4xl h-auto"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">О нас</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Выдающиеся визуальные решения для современных брендов. 
                Мы создаем дизайн с фокусом на эмоциональную связь с аудиторией после определенного времени взаимодействия.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-gray-600">Проектов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-gray-600">Клиентов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-gray-600">Лет опыта</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-gray-600">Качество</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16">Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-sm overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="text-xs font-semibold text-primary mb-2">{item.category}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Связаться</h2>
              <p className="text-lg text-gray-600 mb-8">
                Готовы обсудить ваш проект? Напишите нам, и мы ответим в течение 24 часов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span className="text-gray-600">hello@nda.studio</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span className="text-gray-600">+7 (999) 123-45-67</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="border-gray-200"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="border-gray-200"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Расскажите о проекте"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="border-gray-200 min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full rounded-full" size="lg">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-black">NDA</div>
            <div className="text-sm text-gray-500">© 2025 NDA Studio. Все права защищены.</div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}