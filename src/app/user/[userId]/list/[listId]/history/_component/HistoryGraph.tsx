import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import * as styles from './HistoryGraph.css';
import { HistoryType } from '@/lib/types/historyType';
import timeDiff from '@/lib/utils/time-diff';

interface ItemType {
  title: string;
  history: (number | null)[];
}

interface HistoryGraphProps {
  histories: HistoryType[];
}

function HistoryGraph({ histories }: HistoryGraphProps) {
  const itemRankHistories: ItemType[] = [];
  histories.map((history) => {
    history.items.map((item) => {
      if (!itemRankHistories.some((i) => i.title === item.title)) {
        itemRankHistories.push({ title: item.title, history: [] });
      }
    });
  });

  itemRankHistories.map((i) => {
    histories.map((h) => {
      i.history.push(h.items.find((x) => x.title === i.title)?.rank || null);
    });
  });

  return (
    <div className={styles.container}>{<Chart histories={histories} itemRankHistories={itemRankHistories} />}</div>
  );
}

interface ChartProps {
  itemRankHistories: ItemType[];
  histories: HistoryType[];
}

export function Chart({ histories, itemRankHistories }: ChartProps) {
  const option = {
    chart: {
      id: 'history graph',
      width: '100%',
      height: '100%',
      zoom: {
        enabled: true,
      },
    },
    xaxis: {
      categories: histories.map((history) => timeDiff(String(history.createdDate))),
      tickPlacement: 'on',
      type: 'category',
    },
    yaxis: {
      categories: Array.from({ length: 10 }, (_, index) => 10 - index),
      reversed: 'true',
      stepSize: 1,
    },
    grid: {
      padding: {
        left: 30,
        bottom: 30,
      },
    },
    stroke: { curve: 'smooth' },
    legend: {
      show: true,
      horizontalAlign: 'left',
    },
    noData: {
      text: '히스토리가 없어요.',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: -30,
      style: {
        fontSize: '20px',
      },
    },
  };

  const chartData = itemRankHistories.map((item) => {
    return {
      name: item.title,
      data: item.history,
    };
  });

  return (
    <>
      <ApexChart type="line" options={option} series={chartData} height={300} width={500} />
    </>
  );
}

export { HistoryGraph as Graph };
