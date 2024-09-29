import { useAppSelector } from '../../store';
import { selectLeftInventory } from '../../store/inventory';
import SideGrid from './SideGrid';
import BodyImage from '../../../images/body.png';
import ShirtIcon from '../utils/icons/ShirtIcon';

const SideInventory: React.FC = () => {
    const leftInventory = useAppSelector(selectLeftInventory);

    return (
        <div className="inventory-grid-special">
            <div className="inventory-grid-special-header">
                <ShirtIcon />
                Player Outfit
            </div>
            <div className="inventory-grid-special-content">
                <SideGrid inventory={leftInventory} invType="side" />
                <div className="side-body-div">
                    <img src={BodyImage} className="side-body-div-img" />
                </div>
                <SideGrid inventory={leftInventory} invType="side" />
            </div>
        </div>
    );
};

export default SideInventory;
