import logo from "../assets/imgs/logo/logo.webp";
import logoDesktop from "../assets/imgs/logo/logoDesktop.webp";

//Imports Hero
import bgHero from "../assets/imgs/hero/bgHero.webp";

//Imports Apresentation (About Da Rota principal)
import imgApresentation from "../assets/imgs/apresentation/imgApresentation.webp";

//Imports Features
import imgFeatures1 from "../assets/imgs/features/rotas/features1.webp";
import imgFeatures2 from "../assets/imgs/features/rotas/features2.webp";
import imgFeatures3 from "../assets/imgs/features/rotas/features3.webp";

//Imports About
import aboutImg from "../assets/imgs/about/aboutImg.webp";
import aboutImgBg from "../assets/imgs/about/rotaAbout/bgAbout.webp";
import aboutSocialImg from "../assets/imgs/about/aboutSocial.webp";

//Imports Equipe
import team1 from "../assets/imgs/team/img1.webp";
import team2 from "../assets/imgs/team/img2.webp";
import imgBgTeam from "../assets/imgs/team/bgImgTeam.webp";

//Imports Clientes/Parceiros
import logo1Instituicao from "../assets/imgs/team/instituicoesLogo/logo1.webp";
import logo2Instituicao from "../assets/imgs/team/instituicoesLogo/logo2.webp";
import logo3Instituicao from "../assets/imgs/team/instituicoesLogo/logo3.webp";
import logo4Instituicao from "../assets/imgs/team/instituicoesLogo/logo4.webp";
import logo5Instituicao from "../assets/imgs/team/instituicoesLogo/logo5.webp";
import logo6Instituicao from "../assets/imgs/team/instituicoesLogo/logo6.webp";
import logo7Instituicao from "../assets/imgs/team/instituicoesLogo/logo7.webp";
import logo8Instituicao from "../assets/imgs/team/instituicoesLogo/logo8.webp";
import logo1Cliente from "../assets/imgs/team/clientesLogo/logo1.webp";
import logo2Cliente from "../assets/imgs/team/clientesLogo/logo2.webp";
import logo3Cliente from "../assets/imgs/team/clientesLogo/logo3.webp";
import logo4Cliente from "../assets/imgs/team/clientesLogo/logo4.webp";
import logo1Parceiro from "../assets/imgs/team/parceirosLogo/logo1.webp";
import logo2Parceiro from "../assets/imgs/team/parceirosLogo/logo2.webp";

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
} from "lucide-react";

const currentYear = new Date().getFullYear();

export const infos = {
  name: "A_Definir",
  email: "contato", // Email desejado pelo cliente
  emailSecundario: "A_Definir", // Email desejado pelo cliente
  domain: "A_Definir", // Sem "www"
  phone: {
    ddd: "A_Definir",
    firstPart: "A_Definir", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "A_Definir", // Apenas os 4 últimos números
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
      <p>A_Definir</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
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
      <p>A_Definir</p>
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
      miniTag: <>A_Definir</>,
      FirstPart: <span>A_Definir </span>,
      Destaque: (
        <span className="destaque relative italic font-light">A_Definir</span>
      ),
      SecondPart: <span>A_Definir</span>,
      subtitle: <p>A_Definir</p>,
      heroBg: bgHero,

      alt: "Imagem ilustrativa da Seção Início",
      ctaButtonAriaLabel: "Botão para Whatsapp",
      ctaButtonText: <>A_Definir</>,
      ctaButtonTextSecondary: <>A_Definir</>,
    },
    features: {
      miniTag: <>A_Definir</>,
      FirstPart: <span>A_Definir</span>,
      Destaque: <span className="italic font-light">A_Definir</span>,
      SecondPart: <span></span>,
      subtitle: <>A_Definir</>,
      alt: "Imagem ilustrativa da Features",
      cards: {
        card1: {
          title: <>A_Definir</>,
          subtitle: <>A_Definir</>,
          imgFeatures1: imgFeatures1,
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
        },

        card2: {
          title: <>A_Definir</>,
          subtitle: <>A_Definir</>,
          imgFeatures2: imgFeatures2,
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
        },

        card3: {
          title: <>A_Definir</>,
          subtitle: <>A_Definir</>,
          imgFeatures3: imgFeatures3,
          description: (
            <div>
              A_Definir
              <br />
              <br />
              A_Definir
            </div>
          ),
        },
      },
    },
    apresentation: {
      minitag: <>A_Definir</>,
      title: <>A_Definir</>,
      subtitle: <>A_Definir</>,
      paragraph: (
        <>
          A_Definir
          <br />
          <br />
          A_Definir
        </>
      ),
      img: imgApresentation,
      labelButton: <>Continuar lendo</>,
    },
    maps: {
      minitag: <>A_Definir</>,
      title: <>A_Definir</>,
      subtitle: <>A_Definir</>,
      embedsrc: "",
    },
    form: {
      minitag: <>A_Definir</>,
      title: <>A_Definir</>,
      subtitle: <>A_Definir</>,
    },
    about: {
      imagem: {
        img: aboutImg,
        alt: "Imagem ilustrativa da Seção Sobre",
      },
      miniTag: <>A_Definir</>,
      FirstPart: <span>A_Definir</span>,
      Destaque: <span className="italic font-light">A_Definir</span>,
      SecondPart: <span></span>,
      subtitle: <>A_Definir</>,
      paragraph: (
        <div>
          A_Definir
          <br />
          <br />
          A_Definir
          <br />
          <br />
          A_Definir
          <br />
          <br />
          A_Definir
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
      miniTag: <>A_Definir</>,
      title: <>A_Definir</>,
      subtitle: <>A_Definir</>,
      imgFundo: imgBgTeam,
      cards: {
        card1: {
          img: team1,
          name: <>A_Definir</>,
          role: <>A_Definir</>,
          description: (
            <>
              A_Definir
              <br />
              <br />
              A_Definir
            </>
          ),
          linkedIn: "",
        },
        card2: {
          img: team2,
          name: <>A_Definir</>,
          role: <>A_Definir</>,
          description: (
            <>
              A_Definir
              <br />
              <br />
              A_Definir
            </>
          ),
          linkedIn: "",
        },
      },
      instituicoesAtendidas: {
        card1: {
          img: logo1Instituicao,
          alt: "LogoMarca parceira",
        },
        card2: {
          img: logo2Instituicao,
          alt: "LogoMarca parceira",
        },
        card3: {
          img: logo3Instituicao,
          alt: "LogoMarca parceira",
        },
        card4: {
          img: logo4Instituicao,
          alt: "LogoMarca parceira",
        },
        card5: {
          img: logo5Instituicao,
          alt: "LogoMarca parceira",
        },
        card6: {
          img: logo6Instituicao,
          alt: "LogoMarca parceira",
        },
        card7: {
          img: logo7Instituicao,
          alt: "LogoMarca parceira",
        },
        card8: {
          img: logo8Instituicao,
          alt: "LogoMarca parceira",
        },
      },
      parceirosLogo: {
        card1: {
          img: logo1Parceiro,
          alt: "LogoMarca parceira",
        },
        card2: {
          img: logo2Parceiro,
          alt: "LogoMarca parceira",
        },
      },
      clientesLogo: {
        card1: {
          img: logo1Cliente,
          alt: "LogoMarca parceira",
        },
        card2: {
          img: logo2Cliente,
          alt: "LogoMarca parceira",
        },
        card3: {
          img: logo3Cliente,
          alt: "LogoMarca parceira",
        },
        card4: {
          img: logo4Cliente,
          alt: "LogoMarca parceira",
        },
      },
      sectionTitle: <>A_Definir</>,
      titleClientes: <>A_Definir</>,
      titleParceiros: <>A_Definir</>,
      titleInstituicoes: <>A_Definir</>,
    },
    footer: {
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
