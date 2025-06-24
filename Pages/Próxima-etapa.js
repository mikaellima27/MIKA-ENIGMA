import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ProximaEtapa() {
  const [input, setInput] = useState("");
  const [solved, setSolved] = useState(false);
  const [error, setError] = useState(false);

  // Enigma: decodificar o binário para a palavra correta
  // A resposta certa é "ANNE" (você pode mudar depois)

  const checkAnswer = () => {
    // Simplificando: o usuário deve responder "anne"
    if (input.trim().toLowerCase() === "anne") {
      setSolved(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <Card className="bg-zinc-900 w-full max-w-2xl rounded-2xl shadow-red-600/50 shadow-lg p-8">
        <CardContent>
          <motion.p
            className="text-xl text-red-500 font-semibold mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Enigma: Decifre o código abaixo e diga o nome escondido.
          </motion.p>

          <motion.pre
            className="bg-gray-800 p-4 rounded mb-4 font-mono text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            01000001 01001110 01001110 01000101
          </motion.pre>

          {!solved ? (
            <>
              <input
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-2"
                placeholder="Digite sua resposta..."
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setError(false);
                }}
              />
              <Button onClick={checkAnswer} className="bg-red-600 hover:bg-red-700 text-white">
                Responder
              </Button>
              {error && <p className="text-red-400 mt-2">Resposta incorreta. Tente novamente.</p>}
            </>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 mt-4">
              <p className="text-xl font-semibold mb-2">Correto! Você decifrou o enigma.</p>
              <p className="text-base">Prepare-se para o próximo desafio...</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
