import React from "react";
import {motion} from "framer-motion";

function App(): React.JSX.Element {
    return (
        <React.Fragment>
            <motion.main animate={{opacity: 1}} initial={{opacity: 0}} className={`bg-blue-300`}>
            </motion.main>
        </React.Fragment>
    )
}

export default App
