import { useState } from "react";
import { createPortal } from "react-dom";
import {
  DndContext,
  KeyboardSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
  DragOverlay,
  DropAnimation,
  defaultDropAnimationSideEffects,
  DragStartEvent,
  DragEndEvent,
  MouseSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { TabGroupProps } from "./types";
import { Tab } from "../Tab/Tab";
import { TabContextMenu } from "../TabContextMenu/TabContextMenu";
import { useSelectedTabContext } from "@/hooks";

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.5",
      },
    },
  }),
};

export const TabGroup: React.FC<TabGroupProps> = ({
  items,
  pinned,
  onMoveTab,
  onCloseTab,
  onPin,
  onUnpin,
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { selectedTabId, setSelectedTabId } = useSelectedTabContext();
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 2000,
        tolerance: 0,
      },
    }),
  );

  const getIndex = (id: string) => items.findIndex((item) => item.id === id);
  const activeIndex = activeId ? getIndex(activeId) : -1;
  const activeItem = items[activeIndex];

  const handleDragStart = ({ active }: DragStartEvent) => {
    if (!active) {
      return;
    }
    setActiveId(active.id as string);
    setSelectedTabId(active.id as string);
  };
  const handleDragEnd = ({ over }: DragEndEvent) => {
    setActiveId(null);

    if (over) {
      const overIndex = getIndex(over.id as string);
      if (activeIndex !== overIndex) {
        onMoveTab(activeIndex, overIndex);
      }
    }
  };
  const handleSelectTab = (id: string) => {
    setSelectedTabId(id);
  };
  const handleCloseTab = (id: string) => onCloseTab(id);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveId(null)}
    >
      <SortableContext items={items} strategy={horizontalListSortingStrategy}>
        {items.map((tab, index) => (
          <TabContextMenu
            title={pinned ? "Tab lösen" : "Tab anpinnen"}
            onClick={pinned ? () => onUnpin(tab.id) : () => onPin(tab.id)}
            key={tab.id}
          >
            <Tab
              {...tab}
              active={tab.id === activeId}
              selected={tab.id === selectedTabId}
              pinned={pinned}
              index={index}
              onSelect={handleSelectTab}
              onClose={handleCloseTab}
              onPin={onPin}
              onUnpin={onUnpin}
            />
          </TabContextMenu>
        ))}
      </SortableContext>
      {createPortal(
        <DragOverlay adjustScale={false} dropAnimation={dropAnimationConfig}>
          {activeId ? (
            <Tab
              key={activeId}
              icon={activeItem.icon}
              id={activeItem.id}
              title={activeItem.title}
              dragging={true}
              pinned={pinned}
            />
          ) : null}
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );
};
