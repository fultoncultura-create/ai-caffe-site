import React from 'react'

const PROJECTS = [
  {
    id: 'p1',
    category: 'Curtas e Filmes Experimentais',
    title: 'Entre Linhas do Tempo (Curta)',
    thumb: '/placeholders/entre-linhas-thumb.jpg',
    description: 'Curta experimental que mistura performance humana com geração de cenários via IA. Ferramentas: ChatGPT (roteiro), MidJourney (moodboard), Runway (composição).',
    video: 'https://vimeo.com/000000'
  },
  {
    id: 'p2',
    category: 'Vídeos Publicitários com IA',
    title: 'Campanha "Sopro"',
    thumb: '/placeholders/sopro-thumb.jpg',
    description: 'Anúncio de 30s combinando atores reais e deep compositing gerado por IA para criar ambientes impossíveis. Ferramentas: Runway, Kling, captura real.',
    video: 'https://youtube.com/watch?v=000000'
  },
  {
    id: 'p3',
    category: 'Vinhetas e Motion Graphics',
    title: 'Vinheta IA Café - Série',
    thumb: '/placeholders/vinheta-thumb.jpg',
    description: 'Vinheta de 6s criada com prompts de animação + pós-produção humana. Ferramentas: Runway Gen-2, After Effects.',
    video: ''
  },
  {
    id: 'p4',
    category: 'Testes de Roteiro + Performance',
    title: 'Teste: Ato 1 - Monólogo',
    thumb: '/placeholders/monologo-thumb.jpg',
    description: 'Teste de roteiro onde a IA sugeriu variações de tom e o ator interpretou 5 versões. Resultados compilados em single-take.',
    video: ''
  }
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-gray-100 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-md bg-red-700 flex items-center justify-center text-white font-bold">AI</div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">AI Caffè</h1>
            <p className="text-sm text-gray-300">Criatividade humana + Inteligência Artificial</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#portfolio" className="hover:underline">Portfólio</a>
          <a href="#processo" className="hover:underline">Processo</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-extrabold leading-tight">Criatividade humana +<br/> Inteligência Artificial</h2>
          <p className="mt-6 text-lg text-gray-300 max-w-prose">Transformamos ideias em imagens e cenas que dialogam com atores reais, combinando técnicas cinematográficas tradicionais e ferramentas de IA para gerar narrativas impactantes.</p>
          <div className="mt-8 flex gap-4">
            <a href="#portfolio" className="inline-block bg-red-700 text-white px-6 py-3 rounded-md font-semibold shadow">Ver Portfólio</a>
            <a href="#contato" className="inline-block border border-gray-600 px-6 py-3 rounded-md text-gray-200">Solicitar Orçamento</a>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-80 bg-[url('/placeholders/hero-camera.jpg')] bg-cover bg-center rounded-lg shadow-inner filter contrast-95" />
          <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-2 rounded"> <span className="text-xs text-gray-300">Câmera antiga + IA</span> </div>
        </div>
      </section>

      <section id="portfolio" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-4xl font-bold">Portfólio</h3>
        <p className="mt-2 text-gray-400 max-w-prose">Projetos selecionados mostrando a integração entre atores reais e ferramentas de IA.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {PROJECTS.map(p => (
            <article key={p.id} className="bg-[#0f0f0f] rounded-md overflow-hidden shadow-lg border border-gray-800">
              <div className="w-full h-44 bg-[url(''+p.thumb+'')] bg-cover bg-center" />
              <div className="p-5">
                <h4 className="text-xl font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-300 mt-2">{p.description}</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="px-3 py-1 text-xs bg-gray-800 rounded">{p.category}</span>
                  <a href={p.video || '#'} className="ml-auto inline-block bg-red-700 text-white px-4 py-2 rounded text-sm">Assistir</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="processo" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-4xl font-bold">Processo Criativo</h3>
        <p className="mt-2 text-gray-400 max-w-prose">Um fluxo claro que combina a sensibilidade humana com o poder de ferramentas de IA.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-[#0f0f0f] rounded-md border border-gray-800"><div className="text-2xl font-bold mb-2">1</div><h5 className="font-semibold">Ideia & Roteiro</h5><p className="text-sm text-gray-300 mt-2">ChatGPT / Workshop de Roteiro</p></div>
          <div className="p-6 bg-[#0f0f0f] rounded-md border border-gray-800"><div className="text-2xl font-bold mb-2">2</div><h5 className="font-semibold">Storyboard</h5><p className="text-sm text-gray-300 mt-2">MidJourney / Moodboards visuais</p></div>
          <div className="p-6 bg-[#0f0f0f] rounded-md border border-gray-800"><div className="text-2xl font-bold mb-2">3</div><h5 className="font-semibold">Captação</h5><p className="text-sm text-gray-300 mt-2">Set real + captura facial/gestual</p></div>
          <div className="p-6 bg-[#0f0f0f] rounded-md border border-gray-800"><div className="text-2xl font-bold mb-2">4</div><h5 className="font-semibold">Finalização</h5><p className="text-sm text-gray-300 mt-2">Runway, Kling, edição e color grading</p></div>
        </div>
      </section>

      <section id="contato" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-3xl font-bold">Quer criar um projeto conosco?</h3>
            <p className="mt-3 text-gray-400">Conte a ideia, prazo e orçamento aproximado. Respondemos em até 48h.</p>
            <div className="mt-6 space-y-3 text-sm text-gray-300">
              <div><strong>Email:</strong> contato@aicaffe.com</div>
              <div><strong>Instagram:</strong> @aicaffe.filmes</div>
              <div><strong>Local:</strong> São Paulo, BR</div>
            </div>
          </div>
          <form className="p-6 bg-[#0f0f0f] rounded-md border border-gray-800">
            <label className="block text-sm text-gray-300">Nome</label>
            <input className="w-full mt-2 p-3 bg-transparent border border-gray-700 rounded text-gray-100" placeholder="Seu nome" />
            <label className="block text-sm text-gray-300 mt-4">Email</label>
            <input className="w-full mt-2 p-3 bg-transparent border border-gray-700 rounded text-gray-100" placeholder="seu@exemplo.com" />
            <label className="block text-sm text-gray-300 mt-4">Mensagem / Brief</label>
            <textarea className="w-full mt-2 p-3 bg-transparent border border-gray-700 rounded text-gray-100" rows={5} placeholder="Descreva sua ideia e o que espera do projeto" />
            <div className="mt-4 text-right">
              <button type="button" className="bg-red-700 px-5 py-3 rounded font-semibold">Enviar</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-gray-900 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-gray-500">
          <div>© {new Date().getFullYear()} AI Caffè. Todos os direitos reservados.</div>
          <div>Desenvolvido por AI Caffè</div>
        </div>
      </footer>
    </main>
  )
}
