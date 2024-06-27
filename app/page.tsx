import { Phone, Email, GitHub, LinkedIn, WhatsApp, Rocket, TouchApp } from "@mui/icons-material";
import { Box, Typography, Tooltip, LinearProgress, Divider, List, ListItem, ListItemText } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


export default function Curriculum() {
  return (
    <Box className="pr-5 m-1">
      <Box className="flex flex-row border border-gray-400 rounded-lg gap-6 p-4">
        <Box className="w-2/5">
          <Box className="flex justify-center mb-8 mt-8">
            <Image 
              src="https://media.licdn.com/dms/image/D5603AQGP3x3bHeu8Mg/profile-displayphoto-shrink_800_800/0/1719245738714?e=1724889600&v=beta&t=DBJus15ADvBvSdvIR3nqdquzxuhEZdCkmTENzYaEN0s" 
              alt="Guilherme Jardim"
              className="rounded-full w-64 mb-5"
              quality={100}
              height={1920}
              width={1080}
            />
          </Box>
          <Box className="border-t border-black flex items-center mb-4 hover:underline pt-4">
            <TouchApp className="mr-2" />
            <Typography className="font-bold">
              Acesse Links e Certificados ao clicar ou tocar.
            </Typography>
          </Box>          
          <Typography variant="h6" className="border-b border-black mb-4">DESCUBRA MINHAS HABILIDADES</Typography>
          <Link href="https://github.com/Guilherme-Jardim" target="_blank" className="flex items-center mb-4 hover:underline">
            <GitHub className="mr-2" />
            <Typography className="font-bold">GITHUB</Typography>
            /Guilherme-Jardim
          </Link>
          <Link href="https://app.rocketseat.com.br/me/guilherme-jardim-03544" target="_blank" className="flex items-center mb-4 hover:underline">
            <Rocket className="mr-2" />
            <Typography className="font-bold">ROCKETSEAT</Typography>
              /guilherme-jardim-03544
          </Link>
          <Link href="https://www.linkedin.com/in/guilherme-jardim-482ba0315/" target="_blank" className="flex items-center mb-4 hover:underline">
            <LinkedIn className="mr-2" />
            <Typography className="font-bold">LINKEDIN</Typography>
            /guilherme-jardim-482ba0315
          </Link>
          <Typography variant="h6" className="border-b border-black mb-4">PERFIL</Typography>
          <Typography className="mb-4 indent-2.5">
            Sou uma pessoa bem-humorada, sociável, comunicativa e criativa. Procuro por novos desafios constantemente e principalmente aprimorar todos os conhecimentos em geral que possuo, me atualizando as futuras novidades e adaptações.
          </Typography>
          <Typography variant="h6" className="border-b border-black mb-4">EXPERIÊNCIAS NO TRABALHO</Typography>
            <Typography className="mb-4 indent-2.5">
              Integrações com prefeituras para emissão de RPS, emissão de documentos fiscais e não fiscais como NF-e, NFC-e e PDV.
            </Typography>
            <Typography className="mb-4 indent-2.5">
              Desenvolvimento de projetos como o sistema de Cashback ERP.
            </Typography>  
            <Typography className="mb-4 indent-2.5">
              Estruturação de banco de dados.
            </Typography> 
            <Typography className="mb-4 indent-2.5">
              Manutenção e desenvolvimento de novas funcionalidades em sistema ERP.
            </Typography>               
          <Typography variant="h6" className="border-b border-black mb-4">OBJETIVO</Typography>
          <Typography className="mb-4 indent-2.5">
            Atualmente, sou desenvolvedor Delphi e aprimorei minhas habilidades em desenvolvimento de software. Agora, estou embarcando em uma jornada de aprendizado em JavaScript, estudando bibliotecas e frameworks utilizados na atualidade. Continuo aperfeiçoando meus conhecimentos constantemente, e meu objetivo prioritário é começar a trabalhar com linguagem Web.
          </Typography>
          <Box className="flex flex-col items-stretch" >
            <Typography variant="h6" className="border-b border-black mb-4">IDIOMAS</Typography>
            <Tooltip title="75%">
              <Typography className="mb-2">Espanhol</Typography>
            </Tooltip>
            <LinearProgress variant="determinate" value={75} className="h-2 rounded-lg mb-4"/>
            <Tooltip title="60%">
              <Typography className="mb-2">Inglês</Typography>
            </Tooltip>
            <LinearProgress variant="determinate" value={60} className="h-2 rounded-lg mb-4"/>
          </Box>
          <Typography variant="h6" className="border-b border-black mb-4">CONTATO</Typography>
          <Link href="tel:+54991411153" className="flex items-center mb-4 hover:underline">
            <WhatsApp className="mr-2" />
            (54) 9 9141-1153
          </Link>
          <Link href="tel:+54991411153" className="flex items-center mb-4 hover:underline">
            <Phone className="mr-2" />
            (54) 9 9141-1153
          </Link>
          <Link href="mailto:guilhermejardimj@gmail.com" className="flex items-center mb-4 hover:underline">
            <Email className="mr-2" />
            guilhermejardimj@gmail.com
          </Link>
        </Box>
        <Box className="w-1/10 bg-gray-100 rounded-lg p-6">
          <Typography variant="h3" className="font-bold mb-1">Guilherme Jardim</Typography>
          <Box>
            <Typography variant="h6" className="border-b border-black mb-4">GRADUAÇÃO</Typography>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">Ciência da Computação - Graduação - Descomplica (EAD)</Typography>
              <Typography>2024 - conclusão em 2027</Typography>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">Ciência da Computação - Graduação - Universidade de Caxias do Sul - UCS</Typography>
              <Typography>2022 - 2024 (Transferência)</Typography>
              <Divider />
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" className="border-b border-black mb-4">CURSOS E CERTIFICAÇÕES</Typography>
            <Box className="mb-8">
              <Link href="https://app.rocketseat.com.br/me/guilherme-jardim-03544" target="_blank" className="hover:underline">
                <Typography variant="h6" fontWeight="bold">Formação Node - Rocketseat</Typography>
                <Typography>Em andamento - 60% | 50 horas</Typography>
              </Link>              
              <Divider />
            </Box>
            <Box className="mb-8">
              <Link href="https://app.rocketseat.com.br/me/guilherme-jardim-03544" target="_blank" className="hover:underline">
                <Typography variant="h6" fontWeight="bold">Formação React - Rocketseat</Typography>
                <Typography>Em andamento - 30% | 50 horas</Typography>
              </Link>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Link href="https://www.origamid.com/certificate/733b17d8" target="_blank" className="hover:underline">
                <Typography variant="h6" fontWeight="bold">TypeScript para Iniciantes - Origamid</Typography>
                <Typography>Concluído em 2023 - 22 horas</Typography>
              </Link>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Link href="https://www.origamid.com/certificate/ba0d3359" target="_blank" className="hover:underline">
                <Typography variant="h6" fontWeight="bold">React Completo - Origamid</Typography>
                <Typography>Concluído em 2023 - 36 horas</Typography>
              </Link>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Link href="https://www.origamid.com/certificate/f47637d3" target="_blank" className="hover:underline">
                <Typography variant="h6" fontWeight="bold">JavaScript Completo ES6 - Origamid</Typography>
                <Typography>Concluído em 2023 - 74 horas</Typography>
              </Link>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Link href="https://www.origamid.com/certificate/3a5b0a16" target="_blank" className="hover:underline">
                <Typography variant="h6" fontWeight="bold">UI Design para Iniciantes - Origamid</Typography>
                <Typography>Concluído em 2023 - 34 horas</Typography>
              </Link>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Link href="https://www.origamid.com/certificate/c4e36c83" target="_blank" className="hover:underline">
                <Typography variant="h6" fontWeight="bold">HTML e CSS para Iniciantes - Origamid</Typography>
                <Typography>Concluído em 2022 - 46 horas</Typography>
              </Link>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">PHP Formação - FLEXXO</Typography>
              <Typography>Concluído em 2012 - 120 horas</Typography>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">
                Manutenção de Computadores: Hardware-MS-DOS-Windows/rede-Windows NT4.0/Rede-Windows 2000/Rede-Linux - Amiga Informática
              </Typography>
              <Typography>Concluído em 2008 - 200 horas</Typography>
              <Divider />
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" className="border-b border-black mb-4">EXPERIÊNCIA DE TRABALHO</Typography>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">Windel Sistemas</Typography>
              <Typography>Desenvolvedor de Software - dez/2023 - 2024 (Trabalho atual)</Typography>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">Windel Sistemas</Typography>
              <Typography>Experiência como Tester - set/2023 - dez/2023 (3 meses)</Typography>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">Windel Sistemas</Typography>
              <Typography>Suporte Técnico - dez/2022 - set/2023 (9 meses)</Typography>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">Wopus</Typography>
              <Typography>Estágio Desenvolvedor Front-End - 2022 (1 mês)</Typography>
              <Divider />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}


