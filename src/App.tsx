import React from "react";
import {ApplicationTheme, useThemeStore} from "./states/ThemeState.ts";

function App(): React.JSX.Element {
    return (
        <React.Fragment>
            <main>
                <FirstSection/>
                <SecondSection/>
            </main>
        </React.Fragment>
    )
}

const FirstSection = (): React.JSX.Element => {

    const {currentTheme, toggleTheme} = useThemeStore();
    return (
        <section
            style={{
                backgroundColor: ApplicationTheme.getBackgroundColor(currentTheme),
                color: ApplicationTheme.getForegroundColor(currentTheme)
            }}
            className={`w-screen h-screen`}>
            <button onClick={toggleTheme}>
                {currentTheme}
            </button>
        </section>
    )
}

const SecondSection = (): React.JSX.Element => {
    return (
        <section>

        </section>
    )
}

export default App
