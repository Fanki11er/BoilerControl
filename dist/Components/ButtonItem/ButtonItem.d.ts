export interface Props {
    label: string;
    callback: () => void;
    width?: number;
    id?: string;
    autoFocus?: boolean;
}
declare const ButtonItem: (props: Props) => JSX.Element;
export default ButtonItem;
