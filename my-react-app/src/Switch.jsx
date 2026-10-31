import Switch from '@mui/material/Switch';

const label = { slotProps: { input: { 'aria-label': 'Switch demo' } } };

export default function BasicSwitches() {
  return (
    <div>
      {/* <Switch {...label} defaultChecked /> */}
      <Switch  {...label} defaultChecked/>
      {/* <Switch {...label}   />
      <Switch {...label} disabled /> */}
    </div>
  );
}
