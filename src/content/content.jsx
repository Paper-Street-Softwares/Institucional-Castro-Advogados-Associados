import logo from "../assets/imgs/logo/logo.webp";
import logoDesktop from "../assets/imgs/logo/logoDesktop.webp";

//Imports Hero
import bgHero from "../assets/imgs/hero/bgHero.webp";

//Imports Apresentation (About Da Rota principal)
import imgApresentation from "../assets/imgs/apresentation/imgApresentation.webp";

//Imports Features
import imgFeatures1 from "../assets/imgs/features/rotas/features1.webp";
import imgFeatures2 from "../assets/imgs/features/rotas/features2.webp";

//Imports About
import aboutImg from "../assets/imgs/about/aboutImg.webp";
import aboutImgMobile from "../assets/imgs/about/aboutImgMobile.webp";
import aboutImgBg from "../assets/imgs/about/rotaAbout/bgAbout.webp";
import aboutSocialImg from "../assets/imgs/about/aboutSocial.webp";

//Imports Equipe
import team1 from "../assets/imgs/team/img1.webp";
import team2 from "../assets/imgs/team/img2.webp";
import imgBgTeam from "../assets/imgs/team/bgImgTeam.webp";

//Imports Icons
import {
  Baby,
  Briefcase,
  BriefcaseMedical,
  Gavel,
  Home,
  Key,
  LucideIdCard,
  Lock,
  MessageSquare,
  Scale,
  Users,
  User,
  Car,
  HandCoins,
  Check,
  Shield,
  BriefcaseBusiness,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building,
} from "lucide-react";

const currentYear = new Date().getFullYear();

export const infos = {
  name: "Castro Advocacia",
  email: "contato", // Email desejado pelo cliente
  emailSecundario: "A_Definir", // Email desejado pelo cliente
  domain: "castroassociados.adv.br", // Sem "www"
  phone: {
    ddd: "66",
    firstPart: "99248", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "3413", // Apenas os 4 últimos números
  },
  phoneSecundario: {
    ddd: "A_Definir",
    firstPart: "A_Definir", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "A_Definir", // Apenas os 4 últimos números
  },
  phoneTerciario: {
    ddd: "A_Definir",
    firstPart: "A_Definir", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "A_Definir", // Apenas os 4 últimos números
  },
  endereco: (
    <div>
      {/* <p>Endereço:</p> */}
      <p>Endereço:</p>
      <p>Caminho 41, nº 18, Hernani Sá,</p>
      <p>Ilhéus - BA,</p>
      <p>CEP: 45056-572</p>
    </div>
  ),
  enderecoSecundario: (
    <div>
      <p>Endereço:</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
    </div>
  ),
  expediente: (
    <div>
      <p>Segunda a sexta-feira:</p>
      <p>8h às 18h</p>
    </div>
  ),
  obs: <span className="italic">A_Definir </span>,
  instagramProfile: "", // Sem o @
  instagramProfileSecundario: "",
  facebookProfile: "",
  linkeDinProfile: "",
  x: "",
  tiktokProfile: "",
  youtubeProfile: "",

  whatsappDefaultMessage:
    "Olá! Vim através do site de vocês e gostaria de tirar umas dúvidas.",
  whatsChatDefaultMessage:
    "Gostaria de falar conosco agora mesmo? Clque abaixo 👇",
  slogan: "",
};

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        imgDesktop: logoDesktop,
        alt: `Logomarca ${infos.name}`,
      },
      solidLogo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      menuItems: ["Início", "Serviços", "Sobre", "Perguntas Frequentes"],
      menuId: ["home", "feature", "about", "faq"],
      ariaLabel: "Botão de Contato",
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      miniTag: <>CASTRO ADVOCACIA</>,
      FirstPart: <span>Excelência jurídica na </span>,
      Destaque: (
        <span className="destaque relative italic font-light">
          defesa de direitos
        </span>
      ),
      SecondPart: <span></span>,
      subtitle: (
        <p>
          Soluções jurídicas seguras para proteger direitos, orientar decisões e
          enfrentar desafios legais.
        </p>
      ),
      heroBg: bgHero,
      obsHero: {
        text: (
          <>
            Atendimento próximo, responsável e focado na proteção dos seus
            direitos.
          </>
        ),
      },
      alt: "Imagem ilustrativa da Seção Início",
      ctaButtonAriaLabel: "Botão para Whatsapp",
      ctaButtonText: <>Falar com nossa equipe</>,
      ctaButtonTextSecondary: <>A_Definir</>,
    },
    features: {
      miniTag: <>NOSSAS ESPECIALIDADES</>,
      FirstPart: <span>Áreas de atuação jurídica</span>,
      Destaque: <span className="italic font-light">A_Definir</span>,
      SecondPart: <span></span>,
      subtitle: (
        <>Soluções jurídicas estratégicas para proteger seus direitos.</>
      ),
      alt: "Imagem ilustrativa da Features",
      cards: {
        card1: {
          icon: (
            <>
              <Users width={18} />
            </>
          ),
          minitag: <>Área de Atuação</>,
          title: <>Direito de Família</>,
          subtitle: (
            <>
              Atuação jurídica em questões familiares como divórcio, pensão
              alimentícia, guarda de filhos e regulamentação de convivência,
              sempre buscando soluções seguras e equilibradas para todas as
              partes envolvidas.
            </>
          ),
          imgFeatures1: imgFeatures1,
          description: (
            <div>
              O Direito de Família disciplina as relações jurídicas decorrentes
              dos vínculos familiares, abrangendo questões relacionadas ao
              casamento, à união estável, à filiação, à guarda de filhos, à
              prestação de alimentos e à transmissão patrimonial.
              <br />
              <br />
              Situações dessa natureza costumam envolver decisões relevantes
              tanto no âmbito jurídico quanto pessoal. Por essa razão, é
              fundamental contar com orientação adequada para garantir a
              proteção dos direitos das partes envolvidas e a condução segura de
              cada procedimento.
              <br />
              <br />
              Nossa atuação contempla diferentes demandas relacionadas às
              relações familiares e sucessórias, sempre com análise cuidadosa de
              cada caso e busca por soluções jurídicas equilibradas. Sempre que
              possível, priorizamos caminhos consensuais, que costumam
              proporcionar maior celeridade e menor desgaste às partes.
              <br />
              <br />
              <span className="font-bold">• Divórcio</span>
              <br />
              Atuação em processos de divórcio consensual ou litigioso, com
              orientação jurídica quanto às questões patrimoniais e familiares
              decorrentes da dissolução do casamento, incluindo partilha de
              bens, definição de guarda de filhos e fixação de pensão
              alimentícia.
              <br />
              <br />
              <span className="font-bold">• Dissolução de União Estável</span>
              <br />
              Assessoria jurídica na formalização e dissolução de união estável,
              com análise dos efeitos patrimoniais da relação e orientação
              quanto à partilha de bens, eventual prestação de alimentos e
              demais questões decorrentes da separação.
              <br />
              <br />
              <span className="font-bold">• Pensão Alimentícia</span>
              <br />
              Atuação em demandas relacionadas à fixação, revisão ou exoneração
              de pensão alimentícia, sempre considerando os critérios legais de
              necessidade de quem recebe e possibilidade de quem presta os
              alimentos.
              <br />
              <br />
              <span className="font-bold">
                • Guarda de Filhos e Regulamentação de Convivência
              </span>
              <br />
              Atuação na definição de modalidades de guarda e na regulamentação
              da convivência familiar, buscando soluções que preservem o melhor
              interesse da criança ou do adolescente.
              <br />
              <br />
              <span className="font-bold">• Reconhecimento de Paternidade</span>
              <br />
              Atuação em procedimentos de investigação ou reconhecimento de
              paternidade, bem como na regularização de registros civis e demais
              medidas necessárias para assegurar os direitos decorrentes da
              filiação.
              <br />
              <br />
              <span className="font-bold">• Inventário</span>
              <br />
              Assessoria jurídica na condução de inventários judiciais ou
              extrajudiciais, com acompanhamento das etapas necessárias à
              apuração do patrimônio e à regular transferência dos bens aos
              herdeiros.
              <br />
              <br />
              <span className="font-bold">• Partilha de Bens</span>
              <br />
              Atuação na divisão de patrimônio em decorrência de divórcio,
              dissolução de união estável ou sucessão, com análise das
              particularidades do regime de bens e da composição patrimonial.
              <br />
              <br />
              <span className="font-bold">• Planejamento Sucessório</span>
              <br />
              Orientação jurídica voltada à organização prévia da sucessão
              patrimonial, com o objetivo de proporcionar segurança jurídica,
              facilitar a transmissão de bens e prevenir conflitos familiares
              futuros.
            </div>
          ),
          rota: "/features/direitodefamilia",
        },

        card2: {
          icon: (
            <>
              <Building width={18} />
            </>
          ),
          minitag: <>Área de Atuação</>,
          title: <>Direito Bancário</>,
          subtitle: (
            <>
              Assessoria jurídica voltada à defesa do consumidor em casos de
              abusos bancários, cobranças indevidas, contratos irregulares e
              outras práticas que possam prejudicar o cliente.
            </>
          ),
          imgFeatures2: imgFeatures2,
          description: (
            <div>
              O Direito Bancário regula as relações jurídicas entre clientes e
              instituições financeiras, estabelecendo regras aplicáveis às
              operações de crédito, contratos bancários e demais serviços
              financeiros. Essas relações devem observar limites legais
              destinados a garantir transparência, equilíbrio contratual e
              proteção contra práticas abusivas.
              <br />
              <br />
              Na prática, consumidores e empresas podem se deparar com situações
              como cobranças indevidas, juros excessivos, tarifas irregulares ou
              contratos com cláusulas pouco claras. Nesses casos, a análise
              jurídica adequada é essencial para identificar eventuais
              irregularidades e avaliar as medidas cabíveis.
              <br />
              <br />
              Nossa atuação em Direito Bancário envolve a análise detalhada de
              contratos e operações financeiras, buscando identificar
              abusividades e orientar o cliente quanto às alternativas jurídicas
              disponíveis para a defesa de seus direitos.
              <br />
              <br />
              <span className="font-bold">
                • Revisão de Contratos Bancários
              </span>
              <br />
              Análise jurídica de contratos firmados com instituições
              financeiras para identificar cláusulas abusivas, cobranças
              indevidas ou irregularidades relacionadas a juros, encargos e
              condições contratuais.
              <br />
              <br />
              <span className="font-bold">• Cobranças Indevidas</span>
              <br />
              Atuação em casos que envolvem cobranças bancárias irregulares,
              tarifas indevidas ou valores cobrados de forma incorreta em
              contratos e operações financeiras.
              <br />
              <br />
              <span className="font-bold">• Juros Abusivos</span>
              <br />
              Análise de contratos de crédito e financiamentos para verificar a
              existência de taxas de juros excessivas ou encargos financeiros
              incompatíveis com os limites legais e jurisprudenciais.
              <br />
              <br />
              <span className="font-bold">• Empréstimos e Financiamentos</span>
              <br />
              Assessoria jurídica em conflitos relacionados a contratos de
              empréstimos pessoais, financiamentos bancários e outras
              modalidades de crédito oferecidas por instituições financeiras.
              <br />
              <br />
              <span className="font-bold">
                • Cartão de Crédito e Dívidas Bancárias
              </span>
              <br />
              Atuação em questões envolvendo cobranças relacionadas a cartões de
              crédito, renegociação de dívidas e análise da legalidade de
              encargos aplicados pelas instituições financeiras.
              <br />
              <br />
              <span className="font-bold">• Crédito Consignado</span>
              <br />
              Assessoria em casos envolvendo contratos de crédito consignado,
              especialmente em situações de descontos indevidos, contratação
              irregular ou questionamento das condições contratuais.
            </div>
          ),
          rota: "/features/direitobancario",
        },
      },
    },
    apresentation: {
      minitag: <>CASTRO ADVOGADOS</>,
      title: <>Advocacia estratégica para proteger o que é seu</>,
      subtitle: (
        <>
          Atuação jurídica com estratégia, clareza e compromisso com resultados
          reais.
        </>
      ),
      paragraph: (
        <>
          O escritório atua de forma focada no Direito de Família, lidando
          diariamente com questões que envolvem relações familiares, separações
          e reorganização da vida jurídica após o fim de um relacionamento. Essa
          especialização permite conduzir cada caso com conhecimento técnico e
          sensibilidade diante das particularidades que esse tipo de situação
          exige.
          <br />
          <br />
          <span className="font-bold">• Experiência em divórcios online</span>
          <br />
          Com experiência na condução de divórcios realizados de forma digital,
          o processo pode ser iniciado e acompanhado sem necessidade de
          deslocamentos ou burocracias desnecessárias.
        </>
      ),
      img: imgApresentation,
      labelButton: <>Continuar lendo</>,
    },
    maps: {
      minitag: <>A_Definir</>,
      title: <>A_Definir</>,
      subtitle: <>A_Definir</>,
      embedsrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30856.096061213342!2d-39.07041971410164!3d-14.824584190866375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739a08722864ed7%3A0x60b912958a8c020d!2sHernani%20S%C3%A1%2C%20Ilh%C3%A9us%20-%20BA%2C%2045656-542!5e0!3m2!1spt-BR!2sbr!4v1773493236376!5m2!1spt-BR!2sbr",
    },
    form: {
      minitag: <>A_Definir</>,
      title: <>A_Definir</>,
      subtitle: <>A_Definir</>,
    },
    about: {
      imagem: {
        img: aboutImg,
        imgMobile: aboutImgMobile,
        alt: "Imagem ilustrativa da Seção Sobre",
      },
      miniTag: <>Castro Advogados Associados</>,
      FirstPart: <span>Por que escolher nosso escritório?</span>,
      Destaque: <span className="italic font-light">A_Definir</span>,
      SecondPart: <span></span>,
      subtitle: (
        <>
          Fundado em 2019 pela Dra. Geovana Castro da Costa — OAB/MT 27.016/O e
          atualmente funcionando sob a gestão da Dra. Thanielly Castro Ramos —
          OAB/MT 27.913/O, nosso compromisso é tornar esse momento mais leve,
          rápido e seguro para você.
        </>
      ),
      paragraph: (
        <div>
          <span className="font-bold">
            • Atuação especializada em Direito de Família
          </span>
          <br />
          O escritório atua de forma focada no Direito de Família, lidando
          diariamente com questões que envolvem relações familiares, separações
          e reorganização da vida jurídica após o fim de um relacionamento. Essa
          especialização permite conduzir cada caso com conhecimento técnico e
          sensibilidade diante das particularidades que esse tipo de situação
          exige.
          <br />
          <br />
          <span className="font-bold">• Experiência em divórcios online</span>
          <br />
          Com experiência na condução de divórcios realizados de forma digital,
          o processo pode ser iniciado e acompanhado sem necessidade de
          deslocamentos ou burocracias desnecessárias. A estrutura digital
          permite que todo o procedimento seja conduzido com segurança jurídica
          e praticidade para as partes envolvidas.
          <br />
          <br />
          <span className="font-bold">• Atendimento ágil e personalizado</span>
          <br />
          Cada caso é analisado de forma individual, respeitando as necessidades
          e circunstâncias de cada cliente. O atendimento é conduzido com
          agilidade e atenção, buscando oferecer orientações claras e respostas
          rápidas ao longo de todo o processo.
          <br />
          <br />
          <span className="font-bold">• Transparência em todas as etapas</span>
          <br />A condução do processo ocorre com total transparência, mantendo
          o cliente informado sobre cada etapa, prazos e procedimentos
          envolvidos. Essa clareza permite que todas as decisões sejam tomadas
          com segurança e compreensão sobre o andamento do caso.
        </div>
      ),
      imagemBg: aboutImgBg,
      buttonModalLabelAbout: "Continuar lendo",
      ctaButtonAriaLabel: "Botão de Ação",
      aboutSocial: {
        img: {
          img: aboutSocialImg,
          alt: `Foto do Instagram de ${infos.name}`,
          altDefault: "Imagem ilustrativa da Seção de Redes Sociais",
        },
        miniTag: <>A_Definir</>,
        title: <>A_Definir</>,
        subtitle: <>A_Definir</>,
        paragraph: <p></p>,
        labelInstagram: "Siga-nos no Instagram",
        labelFacebook: "Siga-nos no Facebook",
        labelLinkedin: "Siga-nos no LinkedIn",
        labelX: "Siga-nos no X",
        labelTiktok: "Siga-nos no Tik Tok",
        labelYoutube: "Siga-nos no Youtube",
      },
    },
    team: {
      miniTag: <>Nossa Equipe</>,
      title: <>Profissionais dedicados à defesa dos seus direitos</>,
      subtitle: (
        <>
          Profissionais para oferecer orientação jurídica e estratégica na
          defesa dos direitos de nossos clientes.
        </>
      ),
      imgFundo: imgBgTeam,
      cards: {
        card1: {
          img: team1,
          name: <>Dra. Geovana Castro da Costa</>,
          role: <>OAB/MT 27.016/O</>,
          rota: "/team",
          description: (
            <>
              Dra. Geovana Castro da Costa é advogada dedicada à atuação
              jurídica responsável e estratégica, sempre com o compromisso de
              oferecer aos seus clientes orientação clara e segura em cada etapa
              de suas demandas.
              <br />
              <br />
              Ao longo de sua trajetória profissional, tem desenvolvido uma
              atuação pautada pela análise cuidadosa de cada caso, compreendendo
              que por trás de toda questão jurídica existem pessoas, histórias e
              decisões importantes a serem tomadas. Por isso, acredita que o
              exercício da advocacia vai além da condução de processos — envolve
              escuta, atenção e a construção de soluções jurídicas adequadas
              para cada situação.
              <br />
              <br />
              Sua prática profissional é guiada pelos princípios da ética, da
              responsabilidade e do comprometimento com a defesa dos direitos de
              seus clientes. Cada caso é tratado com dedicação, buscando sempre
              estratégias jurídicas eficientes e soluções que tragam mais
              segurança e tranquilidade para aqueles que confiam em seu
              trabalho.
              <br />
              <br />
              Com postura profissional, atendimento próximo e foco em resultados
              jurídicos consistentes, Dra. Geovana Castro da Costa atua com o
              propósito de oferecer suporte jurídico confiável e de qualidade.
            </>
          ),
          linkedIn: "",
        },
        card2: {
          img: team2,
          name: <>Dra. Thanielly Castro Ramos</>,
          role: <>OAB/MT 27.913/O</>,
          rota: "/team",
          description: (
            <>
              Dra. Thanielly Castro Ramos é advogada comprometida com a
              construção de soluções jurídicas responsáveis e eficazes, sempre
              buscando oferecer aos seus clientes um atendimento baseado na
              confiança, na transparência e na dedicação.
              <br />
              <br />
              Sua atuação profissional é marcada pela atenção aos detalhes e
              pela análise cuidadosa de cada situação apresentada. Entende que
              cada caso possui particularidades que exigem estratégia,
              planejamento e conhecimento jurídico para que os direitos de seus
              clientes sejam devidamente protegidos.
              <br />
              <br />
              Com uma prática jurídica pautada na ética e na responsabilidade,
              Dra. Thanielly dedica-se a orientar seus clientes com clareza,
              auxiliando na compreensão das questões jurídicas envolvidas e na
              tomada de decisões mais seguras.
              <br />
              <br />
              Seu trabalho tem como objetivo não apenas conduzir processos, mas
              também oferecer suporte jurídico sólido e confiável, contribuindo
              para a solução de conflitos e para a defesa dos interesses de quem
              busca seu atendimento.
            </>
          ),
          linkedIn: "",
        },
      },
      sectionTitle: <>A_Definir</>,
      titleClientes: <>A_Definir</>,
      titleParceiros: <>A_Definir</>,
      titleInstituicoes: <>A_Definir</>,
    },
    contato: {
      minitag: <>Fale com a nossa equipe</>,
      title: (
        <>
          Um canal direto para esclarecer dúvidas e iniciar seu atendimento
          jurídico.
        </>
      ),
      subtitle: (
        <>
          Nesta área você pode entrar em contato para apresentar sua situação,
          tirar dúvidas iniciais e receber orientações sobre como podemos ajudar
          no seu caso. Nosso atendimento busca oferecer clareza, organização e
          segurança desde o primeiro contato.
        </>
      ),
      ctaButtonText: <>Ir para contato</>,
    },
    footer: {
      sectionHeader: {
        miniTag: <>Entre em contato</>,
        title: (
          <>
            Nossa equipe está pronta para ouvir seu caso e orientar você com
            atenção e responsabilidade.
          </>
        ),
        subtitle: (
          <>
            Se você precisa de orientação jurídica ou deseja esclarecer alguma
            dúvida, entre em contato com a Castro Advogados. Nossa equipe está
            disponível para entender sua situação e oferecer o suporte jurídico
            necessário com clareza, segurança e profissionalismo.
          </>
        ),
      },
      copyrightLine: ` ${currentYear} - ${infos.name} - Todos os direitos reservados`,
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
      midSectionName: "Até mais",
      footerText:
        "Agradecemos sua visita! Esperamos que em breve você se torne nosso cliente e desfrute de todos os benefícios que oferecemos.",
      footerSocialText: "Siga a gente nas redes sociais:",
      footerNavegacaoText: "NAVEGAÇÃO",
      desenvolvidoPor: "Desenvolvido com excelência por Paper Street",
      privacidade: (
        <div class="phone3:max-w-3xl mx-auto tablet1:px-6 text-gray-900 leading-relaxed font-secondFont">
          <h1 class="text-3xl font-bold mb-6">Política de Privacidade</h1>

          <h2 class="text-xl font-semibold mb-3">Informações Importantes</h2>

          <p class="mb-4">
            Esta Política de Privacidade descreve como coletamos, utilizamos,
            armazenamos e compartilhamos informações pessoais de usuários de
            nossos serviços, em conformidade com a Lei Geral de Proteção de
            Dados (LGPD) - Lei nº 13.709/2018.
          </p>

          <p class="mb-4">
            Nos comprometemos a proteger a privacidade e os dados pessoais de
            todos os usuários, garantindo transparência e segurança em todas as
            etapas de tratamento.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Definições</h2>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>
              <strong>Autoridade Nacional de Proteção de Dados (ANPD):</strong>{" "}
              órgão responsável pela fiscalização e aplicação da LGPD.
            </li>

            <li>
              <strong>Base Legal:</strong> fundamento jurídico que autoriza o
              tratamento de dados pessoais (como consentimento, execução de
              contrato, obrigação legal ou legítimo interesse).
            </li>

            <li>
              <strong>Consentimento:</strong> manifestação livre e informada do
              titular que autoriza o tratamento de seus dados pessoais para uma
              finalidade específica.
            </li>

            <li>
              <strong>Dado Pessoal:</strong> qualquer informação que identifique
              ou possa identificar uma pessoa natural (ex.: nome, CPF, e-mail,
              telefone, IP, localização, etc.).
            </li>

            <li>
              <strong>Dado Pessoal Sensível:</strong> dado que revele origem
              racial, convicção religiosa, opinião política, dado referente à
              saúde, vida sexual, dado genético ou biométrico.
            </li>

            <li>
              <strong>Titular:</strong> pessoa natural a quem se referem os
              dados pessoais tratados.
            </li>

            <li>
              <strong>Tratamento:</strong> qualquer operação realizada com dados
              pessoais, como coleta, armazenamento, uso, compartilhamento ou
              exclusão.
            </li>

            <li>
              <strong>Legítimo Interesse:</strong> quando o tratamento é
              necessário para atender a interesses legítimos do controlador, sem
              ferir direitos e liberdades fundamentais do titular.
            </li>

            <li>
              <strong>Segurança:</strong> medidas técnicas e administrativas
              adotadas para proteger os dados de acessos não autorizados,
              vazamentos ou destruição acidental.
            </li>
          </ul>

          <p class="mb-4">
            <strong>Transparência:</strong> direito do titular de receber
            informações claras e acessíveis sobre o uso de seus dados.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Direitos dos Titulares</h2>

          <p class="mb-3">Os titulares de dados pessoais têm direito a:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>Confirmar se seus dados são tratados;</li>
            <li>
              Acessar, corrigir, atualizar ou solicitar a exclusão de seus
              dados;
            </li>
            <li>Revogar o consentimento a qualquer momento;</li>
            <li>Solicitar portabilidade ou anonimização dos dados;</li>
            <li>Opor-se ao tratamento quando considerar irregular.</li>
          </ul>

          <p class="mb-4">
            As solicitações podem ser feitas por meio dos canais de contato
            disponibilizados pela empresa.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Coleta e Uso de Dados Pessoais
          </h2>

          <p class="mb-3">Podemos coletar dados pessoais por meio de:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>
              Formulários de contato e cadastro (nome, e-mail, telefone,
              endereço, CPF, entre outros);
            </li>
            <li>
              Navegação no site, incluindo endereço IP, localização geográfica,
              tipo de navegador, sistema operacional e tempo de visita;
            </li>
            <li>
              Transações financeiras, quando houver compra de produtos ou
              contratação de serviços;
            </li>
            <li>
              Interações com o suporte ou atendimento, para aprimorar a
              experiência do usuário e a qualidade do serviço.
            </li>
          </ul>

          <p class="mb-3">Esses dados são utilizados para:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>Operar, manter e melhorar nossos serviços;</li>
            <li>Personalizar a experiência do usuário;</li>
            <li>Cumprir obrigações legais e contratuais;</li>
            <li>
              Realizar comunicações e campanhas de marketing, mediante
              consentimento;
            </li>
            <li>
              Garantir segurança, prevenção a fraudes e cumprimento de
              exigências legais.
            </li>
          </ul>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Cookies e Tecnologias de Rastreamento
          </h2>

          <p class="mb-4">
            Nosso site pode utilizar cookies e tecnologias semelhantes para
            melhorar a navegação e compreender como os usuários interagem com o
            conteúdo. O uso de cookies não estritamente necessários dependerá do
            consentimento do usuário, que poderá ser configurado ou revogado a
            qualquer momento em seu navegador.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Compartilhamento e Transferência de Dados
          </h2>

          <p class="mb-3">Podemos compartilhar dados pessoais com:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>
              Parceiros e prestadores de serviço, que auxiliam na operação
              técnica, hospedagem, marketing ou suporte;
            </li>
            <li>Autoridades públicas, quando houver obrigação legal;</li>
            <li>Instituições financeiras, em transações de pagamento.</li>
          </ul>

          <p class="mb-4">
            Em caso de transferência internacional de dados, serão adotadas
            medidas para garantir que o tratamento esteja em conformidade com a
            LGPD e com níveis adequados de proteção.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Armazenamento e Retenção dos Dados
          </h2>

          <p class="mb-4">
            Os dados pessoais são armazenados apenas pelo tempo necessário para
            cumprir as finalidades para as quais foram coletados ou conforme
            exigido por lei. Após o período de retenção, os dados são eliminados
            de forma segura, respeitando normas técnicas e regulatórias.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Segurança da Informação</h2>

          <p class="mb-4">
            Adotamos medidas técnicas, físicas e administrativas adequadas para
            proteger os dados pessoais contra acesso não autorizado, perda,
            alteração, destruição ou divulgação indevida. Embora nenhuma medida
            seja totalmente infalível, buscamos constantemente aprimorar nossas
            práticas de segurança.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Alterações nesta Política</h2>

          <p class="mb-4">
            Esta Política de Privacidade poderá ser atualizada periodicamente,
            conforme alterações legais ou melhorias em nossos processos.
            Recomendamos que o usuário revise este documento regularmente para
            manter-se informado sobre como protegemos suas informações.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Contato</h2>

          <p>
            Em caso de dúvidas, solicitações ou exercício de direitos
            relacionados a dados pessoais, entre em contato pelo canal de
            comunicação indicado no site.
          </p>
        </div>
      ),
      pontos: {
        ponto1: "Profissionalismo",
        ponto2: "Experiência",
        ponto3: "Resultados",
      },
    },
    links: {
      instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
      instagramSecondario: `https://www.instagram.com/${infos.instagramProfileSecundario}/`,
      ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
      phoneSecundario: `https://wa.me/+55${infos.phoneSecundario.ddd}${infos.phoneSecundario.firstPart}${infos.phoneSecundario.secondPart}?text=${infos.whatsappDefaultMessage}`,
      phoneTerciario: `https://wa.me/+55${infos.phoneTerciario.ddd}${infos.phoneTerciario.firstPart}${infos.phoneTerciario.secondPart}?text=${infos.whatsappDefaultMessage}`,
      facebook: `https://www.facebook.com/${infos.facebookProfile}`,
      x: `https://x.com/${infos.x}`,
      linkedin: `https://www.linkedin.com/company/${infos.linkeDinProfile}`,
      tiktok: `https://www.tiktok.com/@${infos.tiktokProfile}/`,
      youtube: `https://www.youtube.com/@${infos.youtubeProfile}/`,
    },
    infos: {
      phone: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
      phoneSecundario: `(${infos.phoneSecundario.ddd}) ${infos.phoneSecundario.firstPart}-${infos.phoneSecundario.secondPart}`,
      phoneTerciario: `(${infos.phoneTerciario.ddd}) ${infos.phoneTerciario.firstPart}-${infos.phoneTerciario.secondPart}`,
      email: `${infos.email}@${infos.domain}`,
      emailSecundario: `${infos.emailSecundario}`,
      adress: infos.endereco,
      adressSecundario: infos.enderecoSecundario,
      officeHours: infos.expediente,
      year: currentYear,
      footerexpediente: infos.expediente,
      obsFooter: infos.obs,
      footerNavegacaoText: "NAVEGAÇÃO",
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
    },
    svgs: {
      wpp: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
        </svg>
      ),
    },
  },
};

export const abstractions = {
  titleModal: <strong>{content.texts.about.title}</strong>,
  subtitleModal: <strong>{content.texts.about.subtitle}</strong>,
};

export default content;
