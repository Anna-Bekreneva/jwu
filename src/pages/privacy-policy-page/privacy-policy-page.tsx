import {PrivacyPolicyWrapper} from './blocks'
import {CustomHead} from "@/components";

export const PrivacyPolicyPage = () => {
  return (
    <>
      <CustomHead
        description={'This page contains information about the privacy policy of the JWU Media, including its principles for processing and protecting users\' personal data.'}
        title={'Privacy policy page | JWU'}/>
        <main>
          <PrivacyPolicyWrapper/>
        </main>
    </>
  )
}
