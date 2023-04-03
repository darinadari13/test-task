import HomeSlider from "../../components/HomeSlider";
import FeaturedSpots from "../../components/FeaturedSpots";
import AboveTheSea from "../../components/AboveTheSea";
import EditorPick from "../../components/EditorPick";
import MountainCollections from "../../components/MountainCollections";

function HomePage() {
  return (
    <div>
      <HomeSlider />
      <FeaturedSpots/>
      <AboveTheSea/>
      <EditorPick/>
      <MountainCollections/>
    </div>
  )
}

export default HomePage;