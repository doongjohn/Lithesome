import type { Handler, Props } from '$internal';

/**
 * The state that is exposed from the `RadioGroup` component.\
 * Which can be used via the `class` prop function or `children` snippet block.
 */
export interface RadioGroupState {
	/** The current selected value. */
	value: string;
}
export interface RadioGroupProps extends Props<HTMLDivElement> {
	/** The value of the radiogroup. */
	value?: string;
	/** Set aria attributes. */
	required?: boolean;
	onChange?: (value: string) => void;
}

/**
 * The state that is exposed from the `RadioGroupItem` component.\
 * Which can be used via the `class` prop function or `children` snippet block.
 */
export interface RadioGroupItemState {
	/** True if the item is selected. */
	checked: boolean;
}
export interface RadioGroupItemEvents {
	/**
	 * Add your own custom logic to the click event.\
	 * Using the regular `onclick` event will overwrite the event used and cause the component to fail.
	 *
	 * Event will **NOT** be fired if the component is disabled.
	 */
	onClick?: Handler<MouseEvent, HTMLButtonElement>;
	/**
	 * Add your own custom logic to the keydown event.\
	 * Using the regular `onkeydown` event will overwrite the event used and cause the component to fail.
	 *
	 * Event will **NOT** be fired if the component is disabled.
	 */
	onKeydown?: Handler<KeyboardEvent, HTMLButtonElement>;
}
export interface RadioGroupItemProps extends Props<HTMLButtonElement, RadioGroupItemState>, RadioGroupItemEvents {
	/** The value of the individual item. */
	value: string;
	/** Disable the item, disallowing clicking and keyboard navigation. */
	disabled?: boolean;
}
