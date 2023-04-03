import HomeSlider from "../../components/HomeSlider";
import FeaturedSpots from "../../components/FeaturedSpots";
import AboveTheSea from "../../components/AboveTheSea";
import EditorPick from "../../components/EditorPick";
import MountainCollections from "../../components/MountainCollections";
import SubscribeForm from "../../components/SubscribeForm";

function HomePage() {
  return (
    <div>
      <HomeSlider />
      <FeaturedSpots/>
      <AboveTheSea/>
      <EditorPick/>
      <MountainCollections/>
      <SubscribeForm/>
    </div>
  )
}

export default HomePage;