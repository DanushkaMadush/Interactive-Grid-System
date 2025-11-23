import styles from "./GridItem.module.css";

export default function GridItem({ selected, onClick }) {
  return (
    <div className={`${styles.box} ${ selected ? styles.selected : "" }`} onClick={onClick}></div>
  );
}
