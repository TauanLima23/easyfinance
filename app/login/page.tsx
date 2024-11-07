import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }  
  return (
    <div className="grid h-full grid-cols-2">
      {/* ESQUERDA */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo.png"
          width={300}
          height={150}
          alt="EasyFinance"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="mb-8 text-muted-foreground">
          EasyFinance é uma plataforma de gestão financeira que utiliza
          inteligência artificial para monitorar suas movimentações, oferecendo
          insights personalizados sobre seus gastos, ganhos e investimentos. Com
          uma visão completa e recomendações práticas, você organiza suas
          finanças hoje para alcançar seus objetivos com mais clareza e
          confiança no futuro.
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>
      {/* DIREITA */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/login.svg"
          width={800}
          height={900}
          alt="Faça Login"
          className="mb-8"
        />
      </div>
    </div>
  );
};

export default LoginPage;
