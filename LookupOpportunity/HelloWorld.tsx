import * as React from 'react';
import { Dropdown, IDropdownOption, Label } from '@fluentui/react';

export interface IHelloWorldProps {
  selectedItemId: string | undefined;
  availableOptions: IDropdownOption[];
  callback: (event: React.FormEvent<HTMLDivElement>, dv?: IDropdownOption) => void;
}

export const Lookup: React.FunctionComponent<IHelloWorldProps> = (props) => {
  return (
    <>
      <Dropdown
        options={props.availableOptions}
        onChange={props.callback}
        selectedKey={props.selectedItemId}
      >
      </Dropdown>
    </>
  );
}