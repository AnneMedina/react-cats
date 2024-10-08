import React from "react"
import Contact from "./components/Contact"

function App() {
    return (
        <div className="contacts">
            <Contact
                img="./images/felix.png"
                name="Mr. Felix"
                number="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact
                img="./images/fluffykins.png"
                name="Mr. Fluffykins"
                number="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                number="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="./images/pumpkin.png"
                name="Mr. Pumpkin"
                number="(0800) CAT KING"
                email="pumpkin@scrimba.com" />
        </div >
    )
}

export default App