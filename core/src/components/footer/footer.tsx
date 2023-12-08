import type { ComponentInterface } from '@stencil/core';
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ion-footer'
})
export class Footer implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
