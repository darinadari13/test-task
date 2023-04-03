import HomeSlider from "../../components/HomeSlider";
import FeaturedSpots from "../../components/FeaturedSpots";
import AboveTheSea from "../../components/AboveTheSea";
import EditorPick from "../../components/EditorPick";
import MountainCollections from "../../components/MountainCollections";
import SubscribeForm from "../../components/SubscribeForm";
import styles from "./index.module.scss";

function HomePage() {
  return (
    <div>
      <HomeSlider />
      <FeaturedSpots/>
      <AboveTheSea/>
      <EditorPick/>
      <MountainCollections/>
      <div className={styles.centerFlex}>
        <div className={styles.divider} />
      </div>
      <SubscribeForm/>
    </div>
  )
}

export default HomePage;