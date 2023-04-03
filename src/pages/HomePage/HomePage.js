import HomeSlider from "../../components/HomeSlider";
import FeaturedSpots from "../../components/FeaturedSpots";
import AboveTheSea from "../../components/AboveTheSea";
import EditorPick from "../../components/EditorPick";

function HomePage() {
  return (
    <div>
      <HomeSlider />
      <FeaturedSpots/>
      <AboveTheSea/>
      <EditorPick/>
    </div>
  )
}

export default HomePage;