import React from 'react';
import styles from './tom.module.css';

export type PillType = 'k' | 's' | 'c' | 'o';
export type LayerBg = 'k' | 's' | 'c' | 'o';

export interface LayerPill {
  text: string;
  type: PillType;
}

export interface Layer {
  bg: LayerBg;
  label: string;
  sub?: string;
  pills?: LayerPill[];
}

interface LayerStackProps {
  layers: Layer[];
}

export default function LayerStack({ layers }: LayerStackProps): React.ReactElement {
  return (
    <div className={styles.layers}>
      {layers.map((layer, i) => (
        <React.Fragment key={i}>
          <div className={styles.layer}>
            <div className={`${styles.lLabel} ${styles[`bg-${layer.bg}`]}`}>
              <strong>{layer.label}</strong>
              {layer.sub && <span>{layer.sub}</span>}
            </div>
            <div className={styles.lBody}>
              {layer.pills?.map((pill, j) => (
                <span key={j} className={`${styles.pill} ${styles[`p${pill.type}`]}`}>
                  {pill.text}
                </span>
              ))}
            </div>
          </div>
          {i < layers.length - 1 && (
            <div className={styles.lArr}>↓ serves governed context to</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
