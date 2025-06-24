import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const audio = new Audio("/audio/piano-classico.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleContinue = () => {
    router.push("/proxima-etapa");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <Card className="bg-zinc-900 w-full max-w-2xl rounded-2xl shadow-red-600/50 shadow-lg p-8">
        <CardContent>
          <motion.p
            className="text-2xl text-red-500 font-semibold mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Você chegou até aqui.
          </motion.p>

          <motion.p
            className="text-lg text-white/80 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Anne Grace não é apenas um nome — é um enigma. Cada página esconde um segredo. Cada símbolo tem um significado. Siga em frente, se tiver coragem.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Button onClick={handleContinue} className="bg-red-600 hover:bg-red-700 text-white">
              Continuar
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
