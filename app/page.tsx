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
              Access Links and Certificates by clicking or tapping.
            </Typography>
          </Box>          
          <Typography variant="h6" className="border-b border-black mb-4">
            DISCOVER MY SKILLS
          </Typography>
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
            I am a good-natured, sociable, communicative and creative person. I constantly look for new challenges and mainly improve all the general knowledge I have, updating myself on future news and adaptations.
          </Typography>
          <Typography variant="h6" className="border-b border-black mb-4">
            EXPERIENCES AT WORK
          </Typography>
          <Typography className="mb-4 indent-2.5">
            Integrations with city halls to issue RPS, issue fiscal and non-fiscal documents such as NF-e, NFC-e and PDV.
          </Typography>
          <Typography className="mb-4 indent-2.5">              
            Development of projects such as the Cashback ERP system.
          </Typography>  
          <Typography className="mb-4 indent-2.5">             
            Database structuring. 
          </Typography> 
          <Typography className="mb-4 indent-2.5">              
            Maintenance and development of new features in the ERP system.
          </Typography>               
          <Typography variant="h6" className="border-b border-black mb-4">OBJECTIVE</Typography>
          <Typography className="mb-4 indent-2.5">
            I am currently a Delphi developer with knowledge in software development. I have honed my skills throughout my journey as a developer and am now embarking on a path to learn JavaScript, focusing on modern libraries and frameworks. I am continually enhancing my knowledge and skills, with the primary goal of transitioning to web development.
          </Typography>
          <Box className="flex flex-col items-stretch" >
            <Typography variant="h6" className="border-b border-black mb-4">
              LANGUAGES
            </Typography>
            <Tooltip title="75%">
              <Typography className="mb-2">
                Spanish
              </Typography>
            </Tooltip>
            <LinearProgress variant="determinate" value={75} className="h-2 rounded-lg mb-4"/>
            <Tooltip title="60%">
              <Typography className="mb-2">
                English
              </Typography>
            </Tooltip>
            <LinearProgress variant="determinate" value={60} className="h-2 rounded-lg mb-4"/>
          </Box>
          <Typography variant="h6" className="border-b border-black mb-4">
            CONTACT
          </Typography>
          <Link href="tel:+54991411153" className="flex items-center mb-4 hover:underline">
            <WhatsApp className="mr-2" />
            +55 (54) 9 9141-1153
          </Link>
          <Link href="tel:+54991411153" className="flex items-center mb-4 hover:underline">
            <Phone className="mr-2" />
            +55 (54) 9 9141-1153
          </Link>
          <Link href="mailto:guilhermejardimj@gmail.com" className="flex items-center mb-4 hover:underline">
            <Email className="mr-2" />
            guilhermejardimj@gmail.com
          </Link>
        </Box>
        <Box className="w-1/10 bg-gray-100 rounded-lg p-6">
          <Typography variant="h3" className="font-bold mb-1">Guilherme Jardim</Typography>
          <Box>
            <Typography variant="h6" className="border-b border-black mb-4">
              BACHELOR DEGREE
            </Typography>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">
                Computer Science - Descomplica Digital College
              </Typography>
              <Typography>
                2024 - conclusion in 2027
              </Typography>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">
                Computer Science - University of Caxias do Sul - UCS
              </Typography>
              <Typography>
                2022 - 2024 (Transfer to Descomplica Digital College)
              </Typography>
              <Divider />
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" className="border-b border-black mb-4">
              COURSES AND CERTIFICATIONS
            </Typography>
            <Box className="mb-8">
              <Link href="https://app.rocketseat.com.br/me/guilherme-jardim-03544" target="_blank" className="hover:underline">
                <Typography variant="h6" fontWeight="bold">
                  Node - Rocketseat
                </Typography>
                <Typography>
                  In progress - 60% | 50 hours
                </Typography>
              </Link>              
              <Divider />
            </Box>
            <Box className="mb-8">
              <Link href="https://app.rocketseat.com.br/me/guilherme-jardim-03544" target="_blank" className="hover:underline">
                <Typography variant="h6" fontWeight="bold">
                  React - Rocketseat
                </Typography>
                <Typography>
                  In progress - 30% | 50 hours
                </Typography>
              </Link>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Link href="https://www.origamid.com/certificate/733b17d8" target="_blank" className="hover:underline">
                <Typography variant="h6" fontWeight="bold">
                  TypeScript - Origamid
                </Typography>
                <Typography>
                  Completed in 2023 - 22 hours
                </Typography>
              </Link>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Link href="https://www.origamid.com/certificate/ba0d3359" target="_blank" className="hover:underline">
                <Typography variant="h6" fontWeight="bold">
                  React - Origamid
                </Typography>
                <Typography>
                  Completed in 2023 - 36 hours
                </Typography>
              </Link>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Link href="https://www.origamid.com/certificate/f47637d3" target="_blank" className="hover:underline">
                <Typography variant="h6" fontWeight="bold">
                  JavaScript ES6 - Origamid
                </Typography>
                <Typography>
                  Completed in 2023 - 74 hours
                </Typography>
              </Link>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Link href="https://www.origamid.com/certificate/3a5b0a16" target="_blank" className="hover:underline">
                <Typography variant="h6" fontWeight="bold">
                  UI | UX Design - Origamid
                </Typography>
                <Typography>
                  Completed in 2023 - 34 hours
                </Typography>
              </Link>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Link href="https://www.origamid.com/certificate/c4e36c83" target="_blank" className="hover:underline">
                <Typography variant="h6" fontWeight="bold">
                  HTML5 | CSS3 - Origamid
                </Typography>
                <Typography>
                  Completed in 2022 - 46 hours
                </Typography>
              </Link>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">
                PHP - FLEXXO
              </Typography>
              <Typography>
                Completed in 2012 - 120 hours
              </Typography>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">
                Computer maintenance: Hardware-MS-DOS-Windows/Network-Windows NT4.0/Network-Windows2000/Network-Linux
              </Typography>
              <Typography>
                Completed in 2008 - 200 hours
              </Typography>
              <Divider />
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" className="border-b border-black mb-4">EXPERIÊNCIA DE TRABALHO</Typography>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">Windel Sistemas</Typography>
              <Typography>
                Software Developer - Dec/2023 - 2024 (Current job)
              </Typography>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">Windel Sistemas</Typography>
              <Typography>Software Tester - Sep/2023 - Dec/2023 (3 months)</Typography>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">Windel Sistemas</Typography>
              <Typography>
                Technical Support - Dec/2022 - Sep/2023 (9 months)
              </Typography>
              <Divider />
            </Box>
            <Box className="mb-8">
              <Typography variant="h6" fontWeight="bold">Wopus</Typography>
              <Typography>
                Front-End Developer Internship - 2022 (1 month)
              </Typography>
              <Divider />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}


