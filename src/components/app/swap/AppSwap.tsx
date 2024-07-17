import '@swing.xyz/ui/theme.css';
import { Swap } from '@swing.xyz/ui';
import "./AppSwap.css";

export function AppSwap() {
  return <div id="swing">
      <Swap projectId="swing-bridge" environment='production' />
    </div>
}