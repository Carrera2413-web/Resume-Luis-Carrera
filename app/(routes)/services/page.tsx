import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";

const ServicesPage = () => {
    return (
<ContainerPage>
    <AvatarServices/>
            <TransitionPage />
            <CircleImage />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10"> 
                <div className="max-w-[450px]">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">My <span className="font-bold text-secondary"> Services.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">
                    Development, implementation and integration of web applications or services as well as the support required to
                    different projects.
                    </p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contact me</button>
                </div>
                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>            
            </ContainerPage>
    );
}

export default ServicesPage;