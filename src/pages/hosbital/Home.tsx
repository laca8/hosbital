

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';

const Home = () => {

    return (
        <div className="relative bg-no-repeat bg-cover bg-center-top  bg-fixed text-white"
            style={{
                backgroundImage:
                    "linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0,0.5) ), url(https://i.pinimg.com/originals/86/89/39/8689395908c3af2e448e810b616f2609.gif)",
                height: "90vh",
            }}>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center p-10"
            >
                <h1 className="text-4xl font-bold mb-4">WE’RE DRIVEN BY ONE MISSION</h1>
                <p className="text-2xl mb-8">A WORLD FREE OF NEURODISORDERS</p>
                <Button variant={'ghost'} className=" text-white font-bold py-2 px-4 rounded border-2">
                    Explore Technology
                </Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="p-5 w-3/4 ml-10 rounded-lg shadow-md"
                style={{
                    background:
                        "linear-gradient(rgba(255,255,255,0.1),rgba(255, 255, 255,0.1) )"

                }}
            >
                <h2 className="text-3xl font-bold mb-4">IT’S BEEN 7 YEARS SINCE WE BEGIN</h2>
                <p className="text-lg ">
                    According to the University of California, San Francisco, there are more than 800 neurological disorders. Neurological disorders are diseases that affect the brain and the central and autonomic nervous systems. In recognizing the signs and symptoms of neurological problems, it is first important to distinguish the various types of neurological disorders. The World Health Organization reports that various types of neurological disorders affect millions of people around the world, including 24 million that suffer from Alzheimer’s.
                </p>
            </motion.div>
        </div>
    )
}

export default Home