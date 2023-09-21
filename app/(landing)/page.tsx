import {Button} from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return (
        <div>
            <Link href="/sign-in">
                <Button>
                    Logar
                </Button>
            </Link>
            <Link href="/sign-up">
                <Button>
                    Cadastrar-se
                </Button>
            </Link>
        </div>
    );
};

export default LandingPage;