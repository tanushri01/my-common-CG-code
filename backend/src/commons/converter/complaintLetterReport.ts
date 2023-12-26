import { generatePdf } from 'html-pdf-node-ts';
import pdfContent from '../constants/pdfContent/complaintLetter';
import { IMultistepForm } from '../../database/user';
import { CollectorAddressType, ComplaintReportAddressType } from '../type/addressType';

export default class ComplaintLetterReport {
  public static async report(multistepForms: Array<IMultistepForm>, email: string): Promise<Buffer> {
    const date = new Date().toUTCString().slice(5, 16);
    let fullName;
    let address = {} as ComplaintReportAddressType;
    let collectorAddress = new Array<CollectorAddressType>();
    let companies = new Array<string>();

    multistepForms.map((multistepForm) => {
      if (multistepForm.questionId === 0) {
        fullName = multistepForm.answer;
      }
      if (multistepForm.questionId === 1) {
        address = multistepForm.answer as ComplaintReportAddressType;
      }
      if (multistepForm.questionId === 2) {
        collectorAddress = multistepForm.answer as CollectorAddressType[];
      }
      if (multistepForm.questionId === 6) {
        companies = multistepForm.answer as string[];
      }
    });
    let pdfData = `${pdfContent.TOP_CONTENT}`;
    pdfData += `  <div class="container">
    <main>
      <section class="page-1"> 
        <header>
           <p>  <strong> ${fullName} </strong>  </p>
           <p>${address.street}</p>
           <p>${address.city} ,${address.state} ${address.zipCode}</p>
           <p> <strong> Phone: </strong> ${address.phone} </p>
           <p>  <strong>Email: </strong> ${email} </p>
        </header>
        
           <h1> UNITED STATES DISTRICT COURT </h1>
           <h1>EASTERN DISTRICT OF${address.state}</h1>
           <div class="brown-content">
              <div class="brown-left">
                 <p> <strong> ${fullName}, </strong> </p>
                 <span> Plaintiff, </span>
             <div class="brown-content-list"> 
             <h4> Companies </h4>`;
    for (let i = 0; i < companies.length; i++) {
      pdfData += `<p>${companies[i]} </p>`;
    }
    pdfData += ` 
             </div>
             <div class="brown-content-list"> 
             <h4> Debt Collector </h4>`;
    for (let i = 0; i < collectorAddress.length; i++) {
      pdfData += `<p>${collectorAddress[i].dcName} </p>`;
    }
    pdfData += ` </div>
             <span>Defendants. </span>
              </div>
              <div class="brown-right">
                 <p> Case No.: ................................................  </p>
                 <p>COMPLAINT FOR VIOLATION OF THE <br> FAIR CREDIT REPORTING ACT <br> UNDER 1.15 U.S.C. §1681  </p>
                 <p> DEMAND FOR A JURY TRIAL </p>
              </div>
           </div>
           <p style="text-indent:60px;">
              This 
              <strong>
                 COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING 
           </p>
           <p>ACT UNDER 1.15 U.S.C. §1681</strong> is respectfully submitted to the United States District Court,
           Eastern District of ${address.state}, for consideration that there may be no rights that will be
           continued to be prejudiced as a result of the wanton violation of Plaintiffs statutorily protected
           rights under the Fair Credit Reporting Act by the Defendants. </p>
        <p class="footer-content"> COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER </br> 1.15 U.S.C. 1681 </p>
        </section>
        
        <section class="page-2">  
           <h1> DECLARATION </h1>
           <p style="text-indent:60px;"> I <strong>${fullName},</strong> do hereby state and declare as follows: </p>
           <p style="text-indent:60px;"> That I am the Plaintiff in the above stated action and should I be required by the Court, I
              will thereby offer my Declaration in lieu of my personal testimony, and I submit the hereinafter
              Declaration pursuant to my personal knowledge of the facts and circumstances alleged herein. 
           </p>
           <p style="text-indent:60px;margin-bottom:150px;"> As Plaintiff, I respectfully submit the following Points and Authorities in support of my
              <strong>COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER
              1.15 U.S.C. §1681 </strong> with demand for damages, attorneys' fees and costs.
           </p>
           <div class="michael-bottom-content"> 
           ${fullName}
           </div>
        <p class="footer-content"> COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER </br> 1.15 U.S.C. 1681 </p>
        </section> 
        <ol>
           <section class="page-3"> 
              <h2> NATURE OF THE COMPLAINT </h2>
                <li> This is a civil action brought under the Fair Credit Reporting Act ("FCRA"), 15 U.S.C.
                  §1681 et. Seq.
                </li>
                <h2> JURISDICTION AND VENUE </h2>
                <li> Jurisdiction is vested before the United States District Court pursuant to 15 U.S.C. §168lp. </li>
                <li> Venue is properly laid at the Eastern District of Pennsylvania where Plaintiff is a habitual resident. </li>
                <h2>PARTIES </h2>
                <li>Plaintiff ${fullName}  ("Plaintiff') is a consumer and natural person residing in the
                 State of ${address.state}.  
                </li>
                <li> Defendant Equifax Information Services, LLC ("Equifax") is a consumer reporting
                  agency as defined by 15 U.S.C. § 168la(f) and conducts substantial and regular business
                  activities in this judicial district. Equifax is a Georgia Corporation registered to do
                  business in the State of  ${address.state}.
                </li>
                <li>Defendant Transunion, LLC ("Transunion") is a consumer reporting agency as defined
                  by 15 U.S.C. § 168la(f) and conducts substantial and regular business activities in this
                  judicial district. Transunion is a Delaware Corporation registered to do business in the
                  State of  ${address.state}.
                </li>
                <li>
                  Defendant Experian Information Solutions, Inc.("Experian") is a consumer reporting
                  agency as defined by 15 U.S.C. § 168la(f) and conducts substantial and regular business
                  activities in this judicial district. Experian is an Ohio Corporation registered to do
                  business in the State of  ${address.state}.
                </li>
                <li> Defendant DNF Associates LLC ("DNF") is a Debt Collector according to 15 U.S.C. §1692a(6). </li>
                <p class="footer-content"> COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER </br> 1.15 U.S.C. 1681 </p>
           </section> 
           <section class="page-4"> 
                 <li>	Defendant DNF is a "user of consumer reports" and "furnisher of information to
                    consumer reporting agencies" as those terms are defined by the 15 U.S.C. §168ls-2.  
                 </li>
                 <li>	Defendant  Credit Collection Services ("CCS") is a Debt Collector according to 15 U.S.C.
                    §1692a(6).  
                 </li>
                 <li>	Defendant CCS is a "user of consumer reports" and "furnisher of information to
                    consumer reporting agencies" as those terms are defined by the 15 U.S.C. §168 ls-2. 
                 </li>
                 <li> Defendant Caine and Weiner ("CW")is a Debt Collector according to 15 U.S.C.
                    §1692a(6). 
                 </li>
                 <li> Defendant CW is a "user of consumer reports" and "furnisher of information to consumer
                    reporting agencies" as those terms are defined by the 15 U.S.C. §168ls-2.
                 </li>
                 <li>
                    Defendant Sunrise Credit Services'"Sunrise") is a Debt Collector according to 15 U.S.C.
                    §1692a(6).
                 </li>
                 <li>Defendant Sunrise is a "user of consumer rep01ts" and "furnisher of information to
                    consumer reporting agencies" as those terms are defined by the 15 U.S.C. §1681s-2. 
                 </li>
                 <h2>FACTUAL BACKGROUND</h2>
                 <li> On or about May 5, 2020, Plaintiff disputed the accuracy of the reporting of the DNF
                    account reported by Equifax, Transunion and Experian ("Bureaus"). The Bureaus did not
                    satisfy their duties, failing to follow reasonable procedures to assure maximum possible
                    accuracy of the information in consumer reports, as required under 15 U.S.C. §168le(b). 
                 </li>
                 <li> Plaintiff repeatedly asked for a reinvestigation and copies of the Automated Credit
                    Dispute Verification ("ACDVs") in his credit files. Equifax did not satisfy its duties,
                    failing to comply with the reinvestigation requirements in 15 U.S.C. §1681i. Equifax also
                    did not satisfy its duties, failing to provide Plaintiff his credit file pursuant to 15 U.S.C.
                    §168lg. 
                 </li>
                 <li> Plaintiff repeatedly asked for a reinvestigation and copies of the ACDVs in his credit
                    files. Transunion did not satisfy its duties, failing to comply with the reinvestigation requirements in 15 U.S.C. §168li. Transunion also did not satisfy its duties, failing to provide Plaintiff his credit file pursuant to U.S.C. §168 lg.
                 </li>
             <p class="footer-content"> COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER </br> 1.15 U.S.C. 1681 </p>
           </section> 
           <section class="page-5"> 
             <li>Plaintiff repeatedly asked for a reinvestigation and copies of the ACDVs in his credit
                    files. Experian did not satisfy its duties, failing to comply with the reinvestigation
                    requirements under 15 U.S.C. §1681i. Experian also did not satisfy its duties, failing to
                    provide Plaintiff his credit file pursuant to 15 U.S.C. §168 lg. 
                 </li>
                 <li>
                    Defendant DNF violation of the Fair Credit Reporting Act has harmed the Plaintiff by,
                    inter alia damaging his credit rating and reputation. 
                 </li>
                 <li>
                    Defendant violation of the Fair Credit Reporting Act was intentional or reckless,
                    and done without any regard for whether it had any right to view Plaintiffs credit reports. 
                 </li>
                 <li>
                    Defendant DNF failed to report the correct balance owed and failed to report the correct
                    status of the account. Defendant DNF failed to satisfy its duty under FCRA, 15 USC
                    1681s-2(b) in updating incomplete or inaccurate information it previously reported to
                    Credit Reporting Agencies upon receipt of a notice from the Credit Reporting Agencies
                    that a consumer disputed the accuracy of the previously reported information. 
                 </li>
                 <li> Defendant CCS failed to report accurate and complete payment history. On or about
                    April 2022, Plaintiff disputed the date the account was opened. Defendant CCS failed to
                    satisfy its duty under FCRA, 15 USC 1681s-2(b) in updating incomplete or inaccurate
                    information it previously reported to Credit Reporting Agencies upon receipt of a notice
                    from the Credit Reporting Agencies that a consumer disputed the accuracy of the
                    previously reported information. 
                 </li>
                 <li>
                    Defendant CW failed to report accurate information to the Bureaus. The account balance
                    is reported as zero and the account is being reported as an active collection account.
                    Defendant CW failed to satisfy its duty under FCRA, 15 USC 1681s-2(b) in updating
                    incomplete or inaccurate information it previously reported to Credit Reporting Agencies
                    upon receipt of a notice from the Credit Reporting Agencies that a consumer disputed the
                    accuracy of the previously reported information. 
                 </li>
             <p class="footer-content"> COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER </br> 1.15 U.S.C. 1681 </p>
           </section> 
              
               <section class="page-6"> 
                 <li>Defendant Sunrise failed to report accurate information to the Bureaus. The account
                    balance is reported as zero and the account is being reported as an active collection
                    account. Defendant Sunrise failed to satisfy its duty under FCRA, 15 USC 1681s-2(b) of
                    updating incomplete or inaccurate information it previously reported to Credit Reporting
                    Agencies upon receipt of a notice from the Credit Reporting Agencies that a consumer
                    disputed the accuracy of the previously reported information. 
                 </li>
                 <h2> FIRST CLAIM FOR RELIEF </h2>
                 <h2> VIOLATION OF FCRA-15 U.S.C. §1681 </h2>
                 <li>
                    Defendants Equifax, Transunion and Experian negligently failed to comply with the
                    requirements imposed under the FCRA, including but not limited to:
                    <ol class="alpha">
                       <li>failing to follow reasonable procedures to assure maximum possible accuracy of the information in consumer reports as required under 15 U.S.C. §1681e(b);
                       </li>
                       <li>failing to comply with the reinvestigation requirements in 15 U.S.C. §1681i; </li>
                       <li>providing Plaintiffs' credit file to companies without determining whether these
                          companies had a permissible purpose to obtain Plaintiffs' credit file pursuant to
                          15 U.S.C. §1681b; and 
                       </li>
                       <li>failing to provide Plaintiff their credit file pursuant to 15 U.S.C. §168lg. </li>
                    </ol>
                 </li>
                 <li>As a result of Defendants violations of the FCRA, Plaintiff suffered, continues to suffer
                    and will suffer future damages, worry, mental anguish, besmirched reputation, distress
                    and frustration, all to his damages, in an amount to be determined by the jury. 
                 </li>
                 <li> Plaintiff is entitled to actual damages in an amount to be proven in trial and determined
                    by the jury. 
                 </li>
             <p class="footer-content"> COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER </br> 1.15 U.S.C. 1681 </p>
             </section> 
             
             <section class="page-7"> 
                 <h2> SECOND CLAIM FOR RELIEF </h2>
                 <h2> VIOLATION OF FCRA - 15 U.S.C. §1681 </h2>
                 <li>Defendants-D-N-F, CCS, CW and Sunrise willfully failed to comply with the requirements imposed under the FCRA, 15 U.S.C. §1681 et seq., including but not limited to: failing to comply with reporting correct inf01mation after notice and confirmation of errors, as
                    required by 15 U.S.C. §1681s-2(b).
                 </li>
                 <li> As a result of Defendants' violations of the FCRA, Plaintiff has suffered, continues to
                    suffer, and will suffer future damages, worry, mental anguish, besmirched reputation,
                    distress and frustration to her damages, in an amount to be determined by the jury.
                 </li>
                 <li> Plaintiff is entitled to punitive damages in an amount to be determined by the jury.</li>
                 <li> Plaintiff is entitled to actual damages in an amount to be proven in trial and determined
                    by the jury in additional to any statutory damages in an amount to be determined by the
                    Court. 
                 </li>
                 <li> Plaintiff is entitled to legal fees including court costs, pursuant to 15 U.S.C. §1681(0). </li>
                 <h2> RELIEFS SOUGHT </h2>
                 <li>
                    On Plaintiff's First Claim for Relief:
                    <ol class="alpha">
                       <li>Actual Damages In an amount to be determined by the jury;</li>
                       <li>Punitive damages in an amount to be determined by the jury;</li>
                       <li>Statutory damages including attorney fees as determined by the court; and</li>
                       <li>Court Costs.</li>
                    </ol>
                 </li>
                 <li>
                    On Plaintiff's Second Claim for Relief:
                    <ol class="alpha">
                       <li>Actual Damages in an amount to be determined by the jury;</li>
                       <li>Punitive damages in an amount to be determined by the jury;</li>
                       <li>Statutory damages including attorney fees as determined by the court; and</li>
                       <li>Court Costs.</li>
                    </ol>
                 </li>
             <p class="footer-content"> COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER </br> 1.15 U.S.C. 1681 </p>
             </section> 
        <section class="page-8"> 
             
                 <h2> CONCLUSION </h2>
                 <p> WHEREFORE, premises considered, Plaintiff ${fullName} respectfully request that: </p>
                 <li>For such violation, the Defendants be made liable to the Plaintiff for actual damages,
                    costs, and attorney's fees, pursuant to 15 U.S.C. §16810; and 
                 </li>
                 <li>For their willful violations of the Fair Credit Reporting Act, the Defendants be made
                    liable to the Plaintiff for actual damages, statutory damages of up to $1,000, punitive
                    damages, costs, and attorney's fees pursuant to 15 U.S.C. § 1681n.  ggg
                 </li>
              
           
           <div class="declare-content hh">
              <h1>   DECLARATION AGAINST PERJURY  </h1>
              <p> I declare under penalty of perjury pursuant to the laws of the State of ${address.state}that
                 the foregoing above is true and correct based on my own personal knowledge of the facts in
                 question. This is executed on the 4<sup>th</sup>${date} in  ${address.state}. 
              </p>
              <p> Respectfully submitted,  </p>
           </div>
        <div class="michael-bottom-content"> 
        ${fullName}
           </div>
        <p class="footer-content"> COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER </br> 1.15 U.S.C. 1681 </p>
        </section>
        </ol>
         <section class="page-9"> 
           <header>
              <p>  <strong>${fullName}</strong>  </p>
              <p> I ${address.street} </p>
              <p>${address.city} ,${address.state} ${address.zipCode}</p>
              <p> <strong> Phone: </strong>  ${address.phone} </p>
              <p>  <strong>Email: </strong> ${email} </p>
           </header>
           <h1> UNITED STATES DISTRICT COURT </h1>
           <h1>EASTERN DISTRICT OF  ${address.state}  </h1>
           <div class="brown-content">
              <div class="brown-left">
                 <p> <strong> ${fullName}, </strong> </p>
                 <span>Plaintiff, </span>
             <div class="brown-content-list"> 
             <h4> Companies </h4>`;
    for (let i = 0; i < companies.length; i++) {
      pdfData += `<p>${companies[i]} </p>`;
    }
    pdfData += `  </div>
             <div class="brown-content-list"> 
             <h4>>Debt Collector</h4>`;
    for (let i = 0; i < collectorAddress.length; i++) {
      pdfData += `<p>${collectorAddress[i].dcName} </p>`;
    }

    pdfData += `   </div>
                 <span> Defendants. </span>
              </div>
              <div class="brown-right">
                 <p> Case No.: ................................................  </p>
                 <p> COMPLAINT FOR VIOLATION OF THE <br> FAIR CREDIT REPORTING ACT <br> UNDER 1.15 U.S.C. §1681  </p>
                 <p> DEMAND FOR A JURY TRIAL </p>
              </div>
           </div>
           <h1 style="margin-bottom:10px;"> PROOF OF SERVICE </h1>
           <p>I, <strong>Michael Brown,</strong> do swear or declare that on this date, <strong>April 4, 2023,</strong> a
              required under ${address.state} Code of Civil Procedure, I have served the enclose
              <strong>COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDE
              1.15 U.S.C. §1681</strong> on each party to the above proceeding or that party's counsel, and o
              every other person required to be served. 
           </p>
        <p class="footer-content"> COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER </br> 1.15 U.S.C. 1681 </p>
        </section>
        <section class="page-10"> 
           <p>The name and addresses of those served are as follows: </p>
        <div class="Companies-info"> 
        <h4> Companies </h4> <ol>`;
    for (let i = 0; i < companies.length; i++) {
      pdfData += ` <li> ${companies[i]}</li>`;
    }
    pdfData += `= </ol>
        </div>
           <div class="info-content"> 
              <h3>Debt Collector</h3>
              <div class="info-list"> 
              <ol>`;
    for (let i = 0; i < collectorAddress.length; i++) {
      pdfData += `
                <li>${collectorAddress[i].dcName}</li>
                <p> ${collectorAddress[i].dcStreet} ${collectorAddress[i].dcCity}</p>
                <p class="last"> ${collectorAddress[i].dcState} ${collectorAddress[i].dcZipCode}</p>`;
    }
    pdfData += `  </ol>
              </div>
           </div>
           <div class="content-list">
             
              <ul>
                 <li> []&nbsp;&nbsp;<strong>(By U.S. Mail)</strong> I deposited such envelope in the mail at City, Pennsylvania with postage thereon fully prepaid. I am readily familia
                    with the regular and customary business practice of this office in which mail is duly deposited in the United States Mail at <strong>April 4, 2023,</strong> i
                    ${address.state} on the date that it is mailed. Under the practice it would be deposited with the U.S. Postal Service on that same day with postage
                    thereon fully prepaid at City, ${address.state} in the ordinary course o business. I am aware that on motion of the	party served, service i presumed
                    invalid if postal cancellation date or postage meter date is more than one day after date of deposit for mailing in affidavit.
                 </li>
                 <li> []&nbsp;&nbsp;<strong>(By Personal Service)</strong> I caused such envelope to be delivered b hand via messenger service to the address above;</li>
                 
             <p class="footer-content"> COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER </br> 1.15 U.S.C. 1681 </p>
                
              </ul>
           </div>
        </section>
        <section class="page-11"> 
           <div class="content-list">
              <ul>
              <li>  []&nbsp;&nbsp;<strong>(By Facsimile)</strong> I served a true and correct copy by facsimile during regular business hours to the number(s) listed above. Said transmissio was reported complete and without error.</li>
                 <li> []&nbsp;&nbsp;<strong>(By E-mail)</strong> I served a true and correct copy by e-mail during regular business hours to the e-mail addresses listed above. Said transmissio was reported complete and successful. </li>

              </ul>
           </div>
           <p> I declare under penalty of perjury that the foregoing is true and correct. Executed on <strong>April 4, 2023.</strong> </p>
        
        <footer>
           <p>(Signature) </p>
        </footer>
      <p class="footer-content"> COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER </br> 1.15 U.S.C. 1681 </p>
      </section>
      </main>
     </div>`;
    pdfData += `${pdfContent.BOTTOM_CONTENT}`;
    const file = { content: pdfData };
    return await generatePdf(file, {
      format: 'A4',
      printBackground: true,
      margin: { bottom: '10px', top: '10px', left: '10px', right: '10px' },
    });
  }
}
