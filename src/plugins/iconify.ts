import {h} from 'vue';
import type {IconSet, IconProps} from 'vuetify';
import {Icon} from '@iconify/vue';

interface IconifyProps extends IconProps {
  color?: string;
}

export const iconify: (set: string) => IconSet = (set) => ({
  component: (props: IconifyProps) =>
    h(Icon, {
      icon: `${set}:${props.icon}`,
      disabled: props.disabled,
      color: props.color,
    }),
});
