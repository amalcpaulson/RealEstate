import { Navigation, ShoppingBag, Train, TreePine, Utensils } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../ui/tabs';
import styles from './index.module.css';

const Neighbourhood = () => {
  return (
    <Tabs defaultValue="metro" className={styles.tabs}>
      <TabsList className={styles.tabsList}>
        <TabsTrigger value="nearest" className={styles.tabTrigger}>
          <Navigation size={14} /> Nearest
        </TabsTrigger>
        <TabsTrigger value="metro" className={styles.tabTrigger}>
          <Train size={14} /> Metro
        </TabsTrigger>
        <TabsTrigger value="shopping" className={styles.tabTrigger}>
          <ShoppingBag size={14} /> Shopping
        </TabsTrigger>
        <TabsTrigger value="parks" className={styles.tabTrigger}>
          <TreePine size={14} /> Parks
        </TabsTrigger>
        <TabsTrigger value="food" className={styles.tabTrigger}>
          <Utensils size={14} /> Food
        </TabsTrigger>
      </TabsList>
      <div className={styles.contentContainer}>
        <TabsContent value="nearest" className={styles.tabContent}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.itemContent}>
                <div className={styles.iconContainer}>
                  <Navigation size={16} />
                </div>
                <div className={styles.itemText}>Nearest Landmark</div>
              </div>
              <div className={styles.itemDistance}>
                10 mins (2.1 kms)
              </div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.itemContent}>
                <div className={styles.iconContainer}>
                  <Navigation size={16} />
                </div>
                <div className={styles.itemText}>City Center</div>
              </div>
              <div className={styles.itemDistance}>
                18 mins (6.4 kms)
              </div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.itemContent}>
                <div className={styles.iconContainer}>
                  <Navigation size={16} />
                </div>
                <div className={styles.itemText}>Airport Road</div>
              </div>
              <div className={styles.itemDistance}>
                25 mins (12.3 kms)
              </div>
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="metro" className={styles.tabContent}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.itemContent}>
                <div className={styles.iconContainer}>
                  <Train size={16} />
                </div>
                <div className={styles.itemText}>Yelachenahalli Metro Station</div>
              </div>
              <div className={styles.itemDistance}>
                14 mins (13.2 kms)
              </div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.itemContent}>
                <div className={styles.iconContainer}>
                  <Train size={16} />
                </div>
                <div className={styles.itemText}>Jaya Prakash Nagar Metro Station</div>
              </div>
              <div className={styles.itemDistance}>
                23 mins (16.4 kms)
              </div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.itemContent}>
                <div className={styles.iconContainer}>
                  <Train size={16} />
                </div>
                <div className={styles.itemText}>Bommasandra Metro Station</div>
              </div>
              <div className={styles.itemDistance}>
                08 mins (3.2 kms)
              </div>
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="shopping" className={styles.tabContent}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.itemContent}>
                <div className={styles.iconContainer}>
                  <ShoppingBag size={16} />
                </div>
                <div className={styles.itemText}>Orion Mall</div>
              </div>
              <div className={styles.itemDistance}>
                20 mins (8.1 kms)
              </div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.itemContent}>
                <div className={styles.iconContainer}>
                  <ShoppingBag size={16} />
                </div>
                <div className={styles.itemText}>Phoenix Marketcity</div>
              </div>
              <div className={styles.itemDistance}>
                32 mins (14.5 kms)
              </div>
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="parks" className={styles.tabContent}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.itemContent}>
                <div className={styles.iconContainer}>
                  <TreePine size={16} />
                </div>
                <div className={styles.itemText}>Central Park</div>
              </div>
              <div className={styles.itemDistance}>
                12 mins (4.6 kms)
              </div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.itemContent}>
                <div className={styles.iconContainer}>
                  <TreePine size={16} />
                </div>
                <div className={styles.itemText}>Lakeside Garden</div>
              </div>
              <div className={styles.itemDistance}>
                18 mins (7.3 kms)
              </div>
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="food" className={styles.tabContent}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.itemContent}>
                <div className={styles.iconContainer}>
                  <Utensils size={16} />
                </div>
                <div className={styles.itemText}>The Food Lounge</div>
              </div>
              <div className={styles.itemDistance}>
                09 mins (2.8 kms)
              </div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.itemContent}>
                <div className={styles.iconContainer}>
                  <Utensils size={16} />
                </div>
                <div className={styles.itemText}>City Bites</div>
              </div>
              <div className={styles.itemDistance}>
                15 mins (5.1 kms)
              </div>
            </li>
          </ul>
        </TabsContent>
      </div>
    </Tabs>
  );
}

export default Neighbourhood;