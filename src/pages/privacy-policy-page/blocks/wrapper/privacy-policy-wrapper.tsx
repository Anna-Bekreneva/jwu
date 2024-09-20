import s from './privacy-policy-wrapper.module.scss';
import {PrivacyPolicyContent} from "../content/content";
import {TableContents} from "../table-contents/table-contents";
export const PrivacyPolicyWrapper = () => {
  return (
    <section className={s.wrapper}>
      <div className={`container container--small`}>
        <div className={s.container}>
          <PrivacyPolicyContent />
          <TableContents className={s.nav} />
        </div>
      </div>
    </section>
  )
}