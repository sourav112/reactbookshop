import React from 'react'
import Navbar_Header from '../components/shared/Navbar_Header'
import Navbar_Footer from '../components/shared/Navbar_Footer'
import {
    Accordion,
    AccordionContainer,
    AccordionContent,
    AccordionIcon,
    AccordionPanel,
    AccordionTitle,
  } from 'keep-react'

export default function Faq_Page() {
  return (
    <div>
    <Navbar_Header/>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-20'>
        <Accordion flush={true}>
            <AccordionPanel>
                <AccordionContainer>
                <AccordionTitle>9.1 What is React.js and Explain the concept of "components" in React.</AccordionTitle>
                <AccordionIcon />
                </AccordionContainer>
                <AccordionContent>
                The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified
                user experience across our products. It simplifies the design and development process by providing
                ready-to-use components that can be easily customized and integrated into various applications.
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionContainer>
                <AccordionTitle>9.2 What is JSX in React, and how does it work?</AccordionTitle>
                <AccordionIcon />
                </AccordionContainer>
                <AccordionContent>
                The Keep React offers a range of color variants for components. To customize the color scheme, you can use the
                available color options such as gray,info,error,warning and success. Simply set the desired color variant as a
                prop when using the component, and it will reflect the chosen color.
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionContainer>
                <AccordionTitle>9.3 What is the Virtual DOM, and how does React use it to optimize performance?</AccordionTitle>
                <AccordionIcon />
                </AccordionContainer>
                <AccordionContent>
                Yes, the Notification component in the Keep React allows you to include extra content alongside the primary
                message. The additionalContent prop can be used to display supplementary information, such as buttons, links,
                or icons, within the notification to provide users with more context and options.
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionContainer>
                <AccordionTitle>9.4 Explain the concept of "props" in React and how they are used.</AccordionTitle>
                <AccordionIcon />
                </AccordionContainer>
                <AccordionContent>
                Yes, the Notification component in the Keep React allows you to include extra content alongside the primary
                message. The additionalContent prop can be used to display supplementary information, such as buttons, links,
                or icons, within the notification to provide users with more context and options.
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionContainer>
                <AccordionTitle>9.5 What is "state" in React, and how does it differ from props?</AccordionTitle>
                <AccordionIcon />
                </AccordionContainer>
                <AccordionContent>
                Yes, the Notification component in the Keep React allows you to include extra content alongside the primary
                message. The additionalContent prop can be used to display supplementary information, such as buttons, links,
                or icons, within the notification to provide users with more context and options.
                </AccordionContent>
            </AccordionPanel>
            </Accordion>
        </div>
    <Navbar_Footer/>

    </div>
  )
}
