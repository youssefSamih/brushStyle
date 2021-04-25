import Link from 'next/link';
import { ElementType, MouseEvent } from 'react';
import { Close } from 'ui/Icons';

import { Icon, Message, Wrapper } from './styles';

interface NotificationPorps {
  msg: string;
  urlLabel?: string;
  url?: string;
  state: 'danger' | string;
  onClick?: ((e: MouseEvent<ElementType, MouseEvent>) => void) &
    ((e: MouseEvent) => void);
  cb?: () => void;
  cbLabel?: string;
}

const Notification = ({
  msg,
  cb,
  cbLabel,
  url,
  urlLabel,
  state,
  onClick,
}: NotificationPorps) => (
  <Wrapper state={state}>
    <Message state={state}>
      <p>{msg}</p>
      {cbLabel && cb && (
        <span
          onClick={cb}
          onKeyDown={(event) => {
            if (event.keyCode === 13) cb();
          }}
          role="button"
          tabIndex={0}
        >
          {cbLabel}
        </span>
      )}
      {urlLabel && url && (
        <Link href={url}>
          <>
            <a>{urlLabel}</a>
          </>
        </Link>
      )}
    </Message>
    <Close as={Icon} state={state} onClick={onClick} />
  </Wrapper>
);

export default Notification;
