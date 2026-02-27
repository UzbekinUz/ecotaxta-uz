import Lottie from "lottie-react";
import videLottie from "../static/lottieVideo.json";
function Loading() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center">
      {/* Orqa fondagi video */}
      <Lottie className="w-100" animationData={videLottie} loop={true} />
    </div>
  );
}

export default Loading;
