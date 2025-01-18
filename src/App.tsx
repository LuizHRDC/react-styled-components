import Header from "./components/Header/Header"
import Features from "./components/Features/Features"
import Section from "./components/Section/Section"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import img1 from "./assets/image1.jpg"
import img2 from "./assets/image2.jpg"
import img3 from "./assets/image3.jpg"

import "./App.css"
import { styled } from "styled-components"

const AppContainer = styled.div`
    width: 805.55px; /* Largura fixa */
    margin: 0 auto; /* Centraliza horizontalmente */
`

function App() {
    return (
        <AppContainer>
            <div className="App">
                <Header title="Minha primeira página com React." />
                <Features
                    features={[
                        {
                            icon: (
                                <i
                                    className="bi bi-laptop"
                                    style={{ fontSize: "50px", color: "blue" }}
                                ></i>
                            ),
                            title: "Somente para desktop",
                            description: "Vamos aprender como utilizar um framework.",
                        },
                        {
                            icon: (
                                <i
                                    className="bi bi-layers"
                                    style={{ fontSize: "50px", color: "blue" }}
                                ></i>
                            ),
                            title: "Criado com componentes",
                            description: "Utilizamos o Styled Components.",
                        },
                        {
                            icon: (
                                <i
                                    className="bi bi-check-circle"
                                    style={{ fontSize: "50px", color: "blue" }}
                                ></i>
                            ),
                            title: "Fácil aproveitamento",
                            description: "Estamos no caminho.",
                        },
                    ]}
                />
                <Section
                    sections={[
                        {
                            image: img1,
                            title: "Lorem ipsum",
                            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus consequatur, ab quasi nostrum voluptate quia libero ullam sint soluta placeat blanditiis voluptatibus, distinctio nobis consectetur esse ut ratione molestiae perspiciatis.",
                        },
                        {
                            image: img2,
                            title: "Lorem ipsum",
                            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus consequatur, ab quasi nostrum voluptate quia libero ullam sint soluta placeat blanditiis voluptatibus, distinctio nobis consectetur esse ut ratione molestiae perspiciatis.",
                        },
                        {
                            image: img3,
                            title: "Lorem ipsum",
                            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus consequatur, ab quasi nostrum voluptate quia libero ullam sint soluta placeat blanditiis voluptatibus, distinctio nobis consectetur esse ut ratione molestiae perspiciatis.",
                        },
                    ]}
                />
                <Contact title="Contato" />
                <Footer
                    links={[
                        { label: "About", href: "#about" },
                        { label: "Contact", href: "#contact" },
                        { label: "Terms of Use", href: "#terms" },
                        { label: "Privacy Policy", href: "#privacy" },
                    ]}
                    socialLinks={[
                        { icon: <FaFacebook />, href: "#" },
                        { icon: <FaTwitter />, href: "#" },
                        { icon: <FaInstagram />, href: "#" },
                    ]}
                    copyrightText="© Your Website 2025. All Rights Reserved."
                />
            </div>
        </AppContainer>
    )
}

export default App
