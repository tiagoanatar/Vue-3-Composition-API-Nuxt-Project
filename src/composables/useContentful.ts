const { getContentful } = useComposite();

export default () => {
  async function getDescription(slug: string) {
    const res = await getContentful(
      `pageWidgetDescription?fields.slug=${slug}`
    );

    const fields = res?.entries?.[0]?.fields;

    if (
      [
        'widget-description-self-employed-verification-screen',
        'widget-description-assistance-verification-screen',
        'widget-description-bank-verification-screen',
      ].includes(slug)
    ) {
      const empData = fields.find((item) => item?.id === 'copy')?.fields
        ?.content?.content;

      return {
        empInfo: [
          empData[0]?.content[0]?.value,
          empData[1]?.content[0]?.value,
          empData[2]?.content[0]?.value,
        ],
      };
    }

    if (slug === 'widget-description-employed-verification-screen') {
      const empData = fields.find((item) => item?.id === 'copy')?.fields
        ?.content?.content;

      return {
        userData: [
          empData[0]?.content[0]?.value,
          empData[1]?.content[0]?.value,
          empData[2]?.content[0]?.value,
          empData[3]?.content[0]?.value,
        ],
      };
    }

    if (slug === 'widget-description-address-verification-screen') {
      const userData = fields.find((item) => item?.id === 'copy')?.fields
        ?.content?.content;

      return {
        empData: [
          userData[0]?.content[0]?.value,
          userData[1]?.content[0]?.value,
        ],
      };
    }

    if (
      [
        'widget-description-refinance-loan-origination-status-complete',
        'widget-description-refinance-status-scheduled',
      ].includes(slug)
    ) {
      const pageContent = fields.find((item) => item.id === 'copy')?.fields
        ?.content?.content;
      return {
        title: pageContent[0]?.content[0]?.value || '',
        exclamationSign: pageContent[1]?.content[0]?.value || '',
        statusText: pageContent[2]?.content[0]?.value || '',
        copy: pageContent[3]?.content[0]?.value || '',
      };
    }

    if (
      [
        'widget-description-loan-origination-summary',
        'widget-description-loan-origination-summary',
        'widget-description-plaid',
      ].includes(slug)
    ) {
      const title = fields?.find((item) => item.id === 'title').fields.label;
      const copy = fields?.find((item) => item.id === 'copy').fields.content
        .content[0].content[0].value;
      const icon = fields?.find((item) => item.id === 'images').fields.images[0]
        .fields.imagesSet[0].fields.cloudinary[0].original_url;
      return {
        copy,
        title,
        icon,
      };
    }
    if (slug === 'widget-description-proof-of-income') {
      const title = fields?.find((item) => item.id === 'title').fields?.label;
      const copy = fields?.find((item) => item.id === 'copy').fields?.content
        ?.content[0]?.content[0]?.value;
      return {
        title,
        copy,
      };
    }

    if (
      [
        'widget-description-loan-origination-success-message',
        'widget-description-refinance-loan-in-process-success-message',
        'widget-description-refinance-and-payment-in-process-success-message',
        'widget-description-refinance-scheduled-success-message',
        'widget-description-financial-success',
      ].includes(slug)
    ) {
      const title = fields?.find((item) => item.id === 'title').fields.label;
      const copy = fields?.find((item) => item.id === 'copy').fields.content
        .content[0].content[0].value;
      const icon = fields?.find((item) => item.id === 'images').fields.images[0]
        .fields.imagesSet[0].fields.cloudinary[0].original_url;
      const iconDesktop01 = fields?.find((item) => item.id === 'images').fields
        .images[0].fields.imagesSet[1].fields.cloudinary[0].original_url;
      const iconDesktop02 = fields?.find((item) => item.id === 'images').fields
        .images[0].fields.imagesSet[2].fields.cloudinary[0].original_url;
      return {
        copy,
        title,
        icon,
        iconDesktop01,
        iconDesktop02,
      };
    }

    if (
      [
        'widget-description-application-incomplete',
        'widget-description-application-start',
      ].includes(slug)
    ) {
      const images = fields?.find((item) => item?.id === 'images')?.fields
        ?.images[0]?.fields?.imagesSet;
      const logo = images[0]?.fields;

      const logoSrc = logo?.cloudinary[0]?.url;
      const logoAlt = logo?.internalName;
      const backgroundSrc = images[1]?.fields?.cloudinary[0]?.url;
      const cardHeader = fields?.find((item) => item?.id === 'title')?.fields
        ?.label;
      const copy = fields?.find((item) => item?.id === 'copy')?.fields?.content;
      const title = copy?.content[0]?.content[0]?.value;
      const description = copy?.content[1]?.content[0]?.value;

      return {
        cardHeader,
        description,
        logoSrc,
        logoAlt,
        backgroundSrc,
        title,
      };
    }

    if (
      [
        'widget-description-refinance-loan-information-payday-loan',
        'widget-description-refinance-loan-information-installment-loan',
      ].includes(slug)
    ) {
      const title =
        fields?.find((item) => item.id === 'title')?.fields?.label || '';
      const copyList = fields
        ?.find((item) => item.id === 'copy')
        ?.fields?.content?.content.map(
          (eachContent) => eachContent?.content[0]?.value || ''
        )
        .filter((copy) => copy);
      return {
        title,
        copyList,
      };
    }

    const title = fields?.find((item) => item.id === 'title').fields.label;
    const copy = fields?.find((item) => item.id === 'copy').fields.content
      .content[0].content[0].value;
    const labels = fields?.find((item) => item?.id === 'copy')?.fields?.content
      ?.content;

    return {
      copy,
      title,
      labels,
    };
  }

  function getDescriptionData(slug: string) {
    return useAsyncData(
      `${slug}-description-data`,
      async () => {
        const fields = await getDescription(slug);
        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getContactInfo(slug: string) {
    const res = await getContentful(
      `pageWidgetContactInfo?fields.slug=${slug}`
    );

    const fields = res?.entries?.[0]?.fields;
    const data = fields?.find((item) => item.id === 'contactInfo').fields;
    const contactInfoContent = data?.contactInfo.map((contactInfoItem) => {
      return {
        heading: contactInfoItem?.fields?.internalName,
        contentListItems: contactInfoItem?.fields?.keyValueList.map(
          (contentListItem) => {
            return {
              contentItemLabel: contentListItem?.fields?.internalName,
              contentItemDescription:
                contentListItem?.fields?.value?.fields?.label,
            };
          }
        ),
      };
    });
    return {
      contactInfoContent,
    };
  }

  function getContactInfoData(slug: string) {
    return useAsyncData(
      `${slug}-contact-data`,
      async () => {
        const fields = await getContactInfo(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getMyDocumentsInfo(slug: string) {
    const res = await getContentful(`pageWidgetDocuments?fields.slug=${slug}`);
    const fields = res?.entries?.[0]?.fields;
    const data = fields?.find((item) => item.id === 'documents').fields;
    const docList = data?.documents.map((doc) => {
      const ctaList = doc?.fields?.ctaList?.fields?.ctaList.map(
        (cta, index) => {
          return {
            id: `${index}-${cta?.fields?.label}-${
              doc?.fields?.title?.fields?.label.split(' ')[0]
            }`,
            heading: cta?.fields?.label,
          };
        }
      );
      return {
        label: doc?.fields?.title?.fields?.label,
        subHeadings: ctaList,
      };
    });
    return {
      docList,
    };
  }

  function getMyDocumentsInfoData(slug: string) {
    return useAsyncData(
      `${slug}-documents-data`,
      async () => {
        const fields = await getMyDocumentsInfo(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getFormSubmit(slug: string) {
    const res = await getContentful(`pageWidgetFooter?fields.slug=${slug}`);
    const fields = res?.data?.entries[0]?.fields;

    if (
      slug === 'widget-footer-loan-origination-payday-loan-manage-debit-card'
    ) {
      const cta = res?.entries[0]?.fields?.find((item) => item.id === 'cta')
        .fields?.label;
      const secureArea = res?.entries[0]?.fields.find(
        (item) => item.id === 'links'
      ).fields?.links[0]?.fields?.label;

      return {
        cta,
        secureArea,
      };
    }

    const links = fields?.find((item) => item.id === 'links').fields.links[0]
      .fields.label;
    const step = fields.find((item) => item.id === 'step').fields.label;
    const cta = fields.find((item) => item.id === 'cta').fields.label;

    return {
      cta,
      links,
      step,
    };
  }

  function getFormSubmitData(slug: string) {
    return useAsyncData(
      `${slug}-form-submit-data`,
      async () => {
        const fields = await getFormSubmit(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getModalInfo(slug: string) {
    const res = await getContentful(
      `pagePageEarlyExitPage?fields.slug=${slug}`
    );

    const fields = res?.entries[0].fields;

    if (slug === 'widget-modal-logout') {
      const buttonLogout = fields.find((item) => item.id === 'saveButton')
        .fields?.label;
      const copyLogout = fields.find((item) => item.id === 'copy').fields
        .content?.content[0]?.content[0]?.value;
      const titleLogout = fields.find((item) => item.id === 'title').fields
        ?.label;

      return {
        buttonLogout,
        copyLogout,
        titleLogout,
      };
    }

    const button = fields.find((item) => item?.id === 'saveButton')?.fields;
    const copy = fields.find((item) => item?.id === 'copy')?.fields;
    const footer = fields.find((item) => item?.id === 'footerNote')?.fields
      ?.label;
    const icon = fields.find((item) => item?.id === 'icon')?.fields;
    const input = fields.find((item) => item?.id === 'emailInput')?.fields;
    const label = fields.find((item) => item?.id === 'label')?.fields;
    const title = fields.find((item) => item?.id === 'title')?.fields;

    return {
      ctaLabel: label?.content?.content[0]?.content[0]?.value,
      modal: {
        ctaLabel: button?.label,
        headline: title?.label,
        image: icon?.cloudinary[0]?.original_url,
        imageAlt: icon?.cloudinary[0]?.context?.custom?.alt || '',
        input: input?.label,
        subheadline: copy?.content?.content[0]?.content[0]?.value,
        subheadline2: copy?.content?.content?.[1]?.content?.[0]?.value || '',
        copy: copy?.content?.content?.map((v) => v?.content?.[0]?.value),
        footer,
      },
    };
  }

  function getModalInfoData(slug: string) {
    return useAsyncData(
      `${slug}-info-modal-data`,
      async () => {
        const fields = await getModalInfo(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  // Created the data object of the fields associated to the provided slug
  async function getForm(slug: string) {
    const res = await getContentful(`pageWidgetForm?fields.slug=${slug}`);
    const fields = res?.entries[0].fields;
    const inputFields = fields.find((item) => item.id === 'formInputs').fields;

    // TODO: move to enum for reusability
    if (slug === 'widget-form-personal-information') {
      const termsConditionLabel = fields.find(
        (item) => item.id === 'extraLabel'
      ).fields.label;

      return {
        currentPhone: inputFields.inputs[3].fields.label,
        dateOfBirth: inputFields.inputs[2].fields.label,
        firstName: inputFields.inputs[0].fields.label,
        lastName: inputFields.inputs[1].fields.label,
        smsOptInLabel: inputFields.inputs[4].fields.label,
        termsConditionLabel,
      };
    }

    if (slug === 'widget-form-personal-address') {
      return {
        address1: inputFields.inputs[0].fields.label,
        address2: inputFields.inputs[1].fields.label,
      };
    }

    if (slug === 'widget-form-personal-identity') {
      return {
        driversLicense: inputFields.inputs[0].fields.label,
        driversLicenseState: inputFields.inputs[1].fields.label,
        driversLicenseExpiration: inputFields.inputs[2].fields.label,
      };
    }

    if (slug === 'widget-form-personal-ssn') {
      return {
        ssn: inputFields.inputs[0].fields.label,
      };
    }

    if (slug === 'widget-form-financial-bank-information') {
      return {
        bankName: inputFields.inputs[3].fields.label,
        checkingAccNumber: inputFields.inputs[1].fields.label,
        confirmCheckingAccNumber: inputFields.inputs[2].fields.label,
        routingNumber: inputFields.inputs[0].fields.label,
      };
    }

    if (slug === 'widget-form-financial-employer-information') {
      return {
        employerName: inputFields.inputs[0].fields.label,
      };
    }

    if (slug === 'widget-form-financial-income-information') {
      return {
        monthlyIncome: inputFields.inputs[0].fields.label,
        netIncome: inputFields.inputs[1].fields.label,
        weeklyIncome: inputFields.inputs[2].fields.label,
      };
    }

    if (slug === 'widget-form-financial-payment-period') {
      return {
        paymentPeriod1: inputFields.inputs[0].fields.label,
        paymentPeriod2: inputFields.inputs[1].fields.label,
      };
    }

    if (slug === 'widget-form-financial-job-status') {
      return {
        jobStatus: [
          inputFields.inputs[0].fields.label,
          inputFields.inputs[1].fields.label,
          inputFields.inputs[2].fields.label,
        ],
      };
    }

    if (slug === 'widget-form-financial-payment-frequency') {
      return {
        paymentFrequency: [
          inputFields.inputs[0].fields.label,
          inputFields.inputs[1].fields.label,
          inputFields.inputs[2].fields.label,
          inputFields.inputs[3].fields.label,
          inputFields.inputs[4].fields.label,
        ],
      };
    }

    if (slug === 'widget-form-financial-payment-type') {
      return {
        paymentType: [
          inputFields.inputs[0].fields.label,
          inputFields.inputs[1].fields.label,
          inputFields.inputs[2].fields.label,
        ],
      };
    }

    if (slug === 'widget-form-application-exit') {
      return {
        exitStatus: [
          inputFields.inputs[0].fields.label,
          inputFields.inputs[1].fields.label,
          inputFields.inputs[2].fields.label,
          inputFields.inputs[3].fields.label,
          inputFields.inputs[4].fields.label,
        ],
      };
    }

    if (slug === 'widget-form-zipcode') {
      return {
        zipCodeInput: inputFields?.inputs?.[0]?.fields?.label || '',
        cta: fields?.find((item) => item?.id === 'cta')?.fields?.label || '',
      };
    }

    if (slug === 'widget-form-loan-need') {
      return {
        radioOptions: inputFields?.inputs,
        cta: fields?.find((item) => item?.id === 'cta')?.fields?.label || '',
      };
    }

    if (slug === 'widget-form-account-details-email-address') {
      const updateEmailLogoutDisclaimer = fields.find(
        (item) => item.id === 'extraLabel'
      ).fields.label;
      return {
        email: inputFields?.inputs[0]?.fields?.label,
        updateEmailLogoutDisclaimer,
      };
    }

    if (
      slug ===
      'widget-form-loan-origination-payday-loan-manage-debit-card-add-card'
    ) {
      return {
        cardHolder: inputFields.inputs[0].fields.label,
        cardNumber: inputFields.inputs[1].fields.label,
        expirationDate: inputFields.inputs[2].fields.label,
        cardCvv: inputFields.inputs[3].fields.label,
      };
    }
  }

  function getFormData(slug: string) {
    return useAsyncData(
      `${slug}-form-data`,
      async () => {
        const fields = await getForm(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getHeader(slug: string) {
    const res = await getContentful(`pageWidgetHeader?fields.slug=${slug}`);
    const fields = res?.entries[0].fields;
    const link = fields?.find((item) => item?.id === 'headerLink')?.fields;
    const headerCta = fields?.find((item) => item?.id === 'labels')?.fields
      ?.labels[0]?.fields?.label;

    return {
      ctaLabel: link.label,
      headerCta,
    };
  }

  function getHeaderData(slug: string) {
    return useAsyncData(
      `${slug}-header-data`,
      async () => {
        const fields = await getHeader(slug);
        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getGlobalHeader(slug: string) {
    const res = await getContentful(`pageWidgetHeader?fields.slug=${slug}`);
    const fields = res?.entries[0]?.fields;

    const link = fields.find((item) => item?.id === 'headerLink')?.fields
      ?.label;
    const logo = fields.find((item) => item?.id === 'logos')?.fields
      ?.imagesSet[0]?.fields?.cloudinary[0]?.original_url;
    const skipContinue = fields.find((item) => item?.id === 'labels')?.fields
      ?.labels[2]?.fields?.label;
    const logoFull = fields.find((item) => item?.id === 'logos')?.fields
      ?.imagesSet[1]?.fields?.cloudinary[0]?.original_url;
    const logoFullWithBlueText = fields.find((item) => item?.id === 'logos')
      ?.fields?.imagesSet[2]?.fields?.cloudinary[0]?.original_url;
    const logoDarkBackground = fields.find((item) => item?.id === 'logos')
      ?.fields?.imagesSet[3]?.fields?.cloudinary[0]?.original_url;
    const headerLabels = fields
      .find((item) => item.id === 'labels')
      .fields?.labels?.map((eachLabel) => eachLabel?.fields?.label);

    /**
     * TODO: Refactor this so that we can have an object that will return the url and alt together
     * NOTE: Not doing it now since it will require changes in all the header widgets that is using this composable
     */
    const logoAltTexts = [
      'logo',
      'logoFull',
      'logoFullWithBlueText',
      'logoDarkBackground',
    ]
      .map((v, i) => ({
        [v]: fields.find((item) => item?.id === 'logos')?.fields?.imagesSet[i]
          ?.fields?.internalName,
      }))
      .reduce((a, s) => ({ ...a, ...s }), {});

    return {
      ctaLabel: link,
      logo,
      logoFull,
      logoFullWithBlueText,
      logoDark: logoDarkBackground,
      skipContinue,
      headerLabels,
      logoAltTexts,
    };
  }

  function getGlobalHeaderData(slug: string) {
    return useAsyncData(
      `${slug}-header-data`,
      async () => {
        const fields = await getGlobalHeader(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getGlobalFooter(slug: string) {
    const res = await getContentful(`pageWidgetFooter?fields.slug=${slug}`);
    const fields = res?.entries[0]?.fields;
    const data = [
      {
        field: 'links',
        labels: ['linkSecureArea', 'linkHelp', 'linkTerms'],
      },
      {
        field: 'labels',
        labels: ['step1', 'step2', 'ctaSaveUpdates', 'ctaSubmit', 'ctaNext'],
      },
    ];

    const items = data
      .map(({ field, labels }) =>
        labels.map((label, index) => ({
          [label]:
            fields?.find((item) => item?.id === field).fields?.[field]?.[index]
              .fields?.label || '',
        }))
      )
      .flat()
      .reduce((acc, cur) => ({ ...acc, ...cur }), {});

    return items;
  }

  function getGlobalFooterData(slug: string) {
    return useAsyncData(
      `${slug}-header-data`,
      async () => {
        const fields = await getGlobalFooter(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getApplicationFooter(slug: string) {
    const res = await getContentful(
      `pageWidgetApplicationFooter?fields.slug=${slug}`
    );
    const fields = res?.entries[0]?.fields;
    const aboutLinks = fields?.find((item) => item.id === 'aboutLinks')?.fields;
    const supportLinks = fields?.find(
      (item) => item.id === 'supportLinks'
    )?.fields;
    const icon = fields?.find((item) => item.id === 'images')?.fields?.images[0]
      .fields?.cloudinary[0]?.original_url;
    const newArr = [].concat(aboutLinks, supportLinks);

    const footerList = newArr.map((item) => {
      const size = item?.ctaList?.length || 0;
      const half = Math.ceil(size / 2);
      return {
        title: item.label,
        footerLinks: [
          item?.ctaList?.slice(0, half)?.map((newItem) => {
            return {
              label: newItem?.fields?.label,
              route: '/',
            };
          }),
          item?.ctaList?.slice(half)?.map((newItem) => {
            return {
              label: newItem?.fields?.label,
              route: '/',
            };
          }),
        ],
      };
    });
    const socialLinks = fields?.find((item) => item.id === 'socialLinks')
      ?.fields?.ctaList;
    const copyRight = fields?.find((item) => item.id === 'copyrightText')
      ?.fields?.label;

    const bottomLinks = fields?.find((item) => item.id === 'bottomLinks')
      ?.fields?.ctaList;
    const privacyLinks = bottomLinks?.map((newItem) => {
      return newItem?.fields?.label;
    });

    return {
      icon,
      copyRight,
      footerList,
      privacyLinks,
      socialLinks,
    };
  }

  function getApplicationFooterData(slug: string) {
    return useAsyncData(
      `${slug}-application-footer-data`,
      async () => {
        const fields = await getApplicationFooter(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getModalTermsAndConditions() {
    const res = await getContentful(
      'pagePageEarlyExitPage?fields.slug=widget-modal-personal-information-terms-privacy'
    );
    const termsAndConditionsFields = res?.entries[0].fields;
    const title = termsAndConditionsFields.find(
      (item) => item.id === 'title'
    ).fields;
    const copy = termsAndConditionsFields.find(
      (item) => item.id === 'copy'
    ).fields;

    return {
      copy: copy.content.content[0].content[0].value,
      title: title.label,
    };
  }

  async function getSummary(slug: string) {
    const res = await getContentful(`pageWidgetReview?fields.slug=${slug}`);
    const fields = res?.entries?.[0]?.fields;
    const labels = fields.find((item) => item.id === 'labels').fields.labels;

    if (slug === 'widget-review-personal-review') {
      return {
        editCta: labels[2].fields.label,
        headline: labels[0].fields.label,
        labelAddress: labels[6].fields.label,
        labelBirthday: labels[5].fields.label,
        labelEmail: labels[7].fields.label,
        labelFirstName: labels[3].fields.label,
        labelLastName: labels[4].fields.label,
        labelPhoneNumber: labels[8].fields.label,
        labelSsn: labels[9].fields.label,
        subHeadline: labels[1].fields.label,
      };
    }
    if (slug === 'widget-review-financial-review') {
      return {
        headline: labels[0]?.fields?.label,
        incomeLabels: [
          labels[1]?.fields?.label,
          labels[10]?.fields?.label,
          labels[20]?.fields?.label,
        ],
        labelFistSourceIncome: labels[1]?.fields?.label,
        labelSecondSourceIncome: labels[10]?.fields?.label,
        labelThirdSourceIncome: labels[20]?.fields?.label,
        editCta: labels[2]?.fields?.label,
        labelJobStatus: labels[3]?.fields?.label,
        labelEmployerInfo: labels[4]?.fields?.label,
        labelPaymentType: labels[6]?.fields?.label,
        labelPaymentTypeYes: labels[21]?.fields?.label,
        labelPaymentTypeNo: labels[22]?.fields?.label,
        labelPaymentFrequency: labels[23]?.fields?.label,
        labelIncomeInformation: labels[5]?.fields?.label,
        labelDateLastCheck: labels[7]?.fields?.label,
        labelDateNextCheck: labels[8]?.fields?.label,
        labelDeleteIncome: labels[9]?.fields?.label,
        labelAddSourceIncome: labels[11]?.fields?.label,
        labelAboutBank: labels[12]?.fields?.label,
        labelConnectedAccount: labels[13]?.fields?.label,
        labelBankName: labels[14]?.fields?.label,
        labelAccountNumber: labels[15]?.fields?.label,
        labelFicoScore: labels[16]?.fields?.label,
        labelBySubmitConsent: labels[17]?.fields?.label,
        labelElectronicCommunication: labels[18]?.fields?.label,
        labelPrivacyConsent: labels[19]?.fields?.label,
        labelMonthlyIncome: labels[24]?.fields?.label,
        labelNetIncome: labels[25]?.fields?.label,
        labelGrossIncome: labels[26]?.fields?.label,
      };
    }
    if (slug === 'widget-summary-loan-origination') {
      return {
        headline: labels[0].fields.label,
        labelOrderSummary: labels[1].fields.label,
        labelInstallmentLoan: labels[2].fields.label,
        labelLoanAmount: labels[3].fields.label,
        labelInstallmentAmount: labels[4].fields.label,
        labelPaymentDate: labels[5].fields.label,
        labelPaymentNumber: labels[6].fields.label,
        labelHowReceive: labels[7].fields.label,
        labelApr: labels[8].fields.label,
        labelFinanceCharge: labels[9].fields.label,
        labelTotalRepayment: labels[10].fields.label,
        labelViewLenderDisclosures: labels[11].fields.label,
        labelSignatureRequired: labels[12].fields.label,
        agreement: labels[13].fields.label,
        buttonCta: labels[14].fields.label,
      };
    }
    if (slug === 'widget-summary-reapply-loan-origination-payday-loan') {
      return {
        headline: labels[0]?.fields?.label,
        labelOrderSummary: labels[1]?.fields?.label,
        labelLoan: labels[2]?.fields?.label,
        loanDetailsLabels: [
          labels[3]?.fields?.label,
          labels[4]?.fields?.label,
          labels[5]?.fields?.label,
        ],
        loanChargeLabels: [
          labels[6]?.fields?.label,
          labels[7]?.fields?.label,
          labels[8]?.fields?.label,
        ],
        labelViewLenderDisclosures: labels[9]?.fields?.label,
        labelSignatureRequired: labels[10]?.fields?.label,
        agreementLabels: [
          labels[11]?.fields?.label,
          labels[12]?.fields?.label,
          labels[13]?.fields?.label,
        ],
        buttonCta: labels[14]?.fields?.label,
      };
    }
    if (slug === 'widget-summary-reapply-loan-origination-installment-loan') {
      return {
        headline: labels[0]?.fields?.label,
        labelOrderSummary: labels[1]?.fields?.label,
        labelLoan: labels[2]?.fields?.label,
        loanDetailsLabels: [
          labels[3]?.fields?.label,
          labels[4]?.fields?.label,
          labels[5]?.fields?.label,
          labels[6]?.fields?.label,
          labels[7]?.fields?.label,
          labels[8]?.fields?.label,
        ],
        loanChargeLabels: [
          labels[9]?.fields?.label,
          labels[10]?.fields?.label,
          labels[11]?.fields?.label,
        ],
        labelViewLenderDisclosures: labels[12]?.fields?.label,
        labelSignatureRequired: labels[13]?.fields?.label,
        agreementLabels: [
          labels[14]?.fields?.label,
          labels[15]?.fields?.label,
          labels[16]?.fields?.label,
        ],
        buttonCta: labels[17]?.fields?.label,
      };
    }
    if (slug === 'widget-summary-refinance-loan-origination-installment-loan') {
      return {
        headline: labels[0]?.fields?.label,
        labelOrderSummary: labels[1]?.fields?.label,
        labelLoan: labels[2]?.fields?.label,
        loanDetailsLabels: [
          labels[3]?.fields?.label,
          labels[4]?.fields?.label,
          labels[5]?.fields?.label,
          labels[6]?.fields?.label,
          labels[7]?.fields?.label,
          labels[8]?.fields?.label,
        ],
        loanChargeLabels: [
          labels[9]?.fields?.label,
          labels[10]?.fields?.label,
          labels[11]?.fields?.label,
        ],
        labelViewLenderDisclosures: labels[12]?.fields?.label,
        labelPaymentAmountDue: labels[13]?.fields?.label,
        paymentAmountDueDescription: labels[14]?.fields?.label,
        paymentDueDetailsLabels: [
          labels[15]?.fields?.label,
          labels[16]?.fields?.label,
        ],
        labelPayFrom: labels[17]?.fields?.label,
        labelSignatureRequired: labels[18]?.fields?.label,
        agreementLabels: [
          labels[19]?.fields?.label,
          labels[20]?.fields?.label,
          labels[21]?.fields?.label,
        ],
        buttonCtaIAgree: labels[22]?.fields?.label,
        buttonCtaIAgreeAndPay: labels[23]?.fields?.label,
      };
    }
    if (slug === 'widget-summary-refinance-loan-origination-payday-loan') {
      return {
        headline: labels[0]?.fields?.label,
        labelOrderSummary: labels[1]?.fields?.label,
        labelLoan: labels[2]?.fields?.label,
        loanDetailsLabels: [
          labels[3]?.fields?.label,
          labels[4]?.fields?.label,
          labels[5]?.fields?.label,
          labels[6]?.fields?.label,
        ],
        loanChargeLabels: [
          labels[7]?.fields?.label,
          labels[8]?.fields?.label,
          labels[9]?.fields?.label,
        ],
        labelViewLenderDisclosures: labels[10]?.fields?.label,
        labelPaymentAmountDue: labels[11]?.fields?.label,
        paymentAmountDueDescription: labels[12]?.fields?.label,
        paymentDueDetailsLabels: [
          labels[13]?.fields?.label,
          labels[14]?.fields?.label,
        ],
        labelPayFrom: labels[15]?.fields?.label,
        labelSignatureRequired: labels[16]?.fields?.label,
        agreementLabels: [
          labels[17]?.fields?.label,
          labels[18]?.fields?.label,
          labels[19]?.fields?.label,
        ],
        buttonCtaIAgree: labels[20]?.fields?.label,
        buttonCtaIAgreeAndPay: labels[21]?.fields?.label,
        buttonCtaIAgreeAndScheduleRefinance: labels[22]?.fields?.label,
      };
    }
    if (slug === 'widget-summary-refinance-loan-origination-title-loan') {
      return {
        headline: labels[0]?.fields?.label,
        labelOrderSummary: labels[1]?.fields?.label,
        labelLoan: labels[2]?.fields?.label,
        loanDetailsLabels: [labels[3]?.fields?.label, labels[4]?.fields?.label],
        loanChargeLabels: [
          labels[5]?.fields?.label,
          labels[6]?.fields?.label,
          labels[7]?.fields?.label,
        ],
        labelViewLenderDisclosures: labels[8]?.fields?.label,
        labelPaymentAmountDue: labels[9]?.fields?.label,
        paymentAmountDueDescription: labels[10]?.fields?.label,
        paymentDueDetailsLabels: [
          labels[11]?.fields?.label,
          labels[12]?.fields?.label,
        ],
        labelPayFrom: labels[13]?.fields?.label,
        labelSignatureRequired: labels[14]?.fields?.label,
        agreementLabels: [
          labels[15]?.fields?.label,
          labels[16]?.fields?.label,
          labels[17]?.fields?.label,
        ],
        buttonCtaIAgree: labels[18]?.fields?.label,
        buttonCtaIAgreeAndPay: labels[19]?.fields?.label,
        buttonCtaIAgreeAndScheduleRefinance: labels[20]?.fields?.label,
      };
    }
  }

  function getSummaryData(slug: string) {
    return useAsyncData(
      `${slug}-personal-summary-data`,
      async () => {
        const fields = await getSummary(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getDisclosure(slug: string) {
    const res = await getContentful(`pageWidgetDisclosure?fields.slug=${slug}`);
    const fields = res?.entries?.[0]?.fields;

    const copy = fields?.find((item) => item.id === 'copyLine1')?.fields
      ?.content;
    const copyLine2 = fields?.find((item) => item.id === 'copyLine2')?.fields
      ?.content;
    const labels = fields.find((item) => item.id === 'labels')?.fields;
    const linkOne = fields?.find((item) => item.id === 'link1')?.fields;
    const linkTwo = fields?.find((item) => item.id === 'link2')?.fields;

    if (slug === 'widget-disclosure-financial') {
      return {
        copy: copy.content[0].content[0].value,
        labelFicoScore: labels.labels[0].fields.label,
        labelFormTitle: labels.labels[1].fields.label,
        labelFormYes: labels.labels[2].fields.label,
        labelFormNo: labels.labels[3].fields.label,
      };
    }

    if (slug === 'widget-disclosure-re-apply') {
      return {
        copy: copy?.content[0]?.content[0]?.value,
        copyLine2: copyLine2?.content[0]?.content[0]?.value,
        copyLine3: copyLine2?.content[1]?.content[0]?.value,
        caElectronicPolicyLink: linkOne?.label,
        caPrivacyPolicyLink: linkTwo?.label,
      };
    }
  }

  function getDisclosureData(slug: string) {
    return useAsyncData(
      `${slug}-disclosure-data`,
      async () => {
        const fields = await getDisclosure(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  function getHeaderZipcode(slug: string) {
    return useAsyncData(
      'header-zipcode',
      async () => {
        const res = await getContentful(slug);

        const fields = res?.entries?.[0]?.fields?.find(
          (item) => item?.id === 'logos'
        )?.fields?.imagesSet;

        return {
          logoDesktop: fields?.[0]?.fields?.cloudinary?.[0]?.original_url || '',
          logoMobile: fields?.[1]?.fields?.cloudinary?.[0]?.original_url || '',
        };
      },
      { server: false }
    );
  }

  async function getPreference(slug: string) {
    const res = await getContentful(`pageWidgetPreference?fields.slug=${slug}`);
    const fields = res?.entries?.[0]?.fields;

    const preferences = fields[1].fields.preferences.map((preference) => {
      return {
        title: preference.fields?.titile?.fields?.label,
        copy: preference.fields?.copy?.fields?.content?.content?.[0]
          ?.content?.[0]?.value,
        input: preference.fields?.checkbox?.fields,
      };
    });

    return {
      preferences,
    };
  }

  async function getPaydayLoanTimeline(slug: string) {
    const res = await getContentful(`pageWidgetTimeline?fields.slug=${slug}`);
    const fields = res?.entries?.[0]?.fields;

    if (slug === 'widget-timeline-payday-steps') {
      const title = fields[1]?.fields?.label;
      const timelineSteps = fields[2]?.fields?.steps?.map((step) => {
        return {
          heading: step?.fields?.title?.fields?.label,
          text: step?.fields?.copy?.fields?.content?.content?.[0]?.content?.[0]
            ?.value,
        };
      });

      return {
        title,
        timelineSteps,
      };
    }

    if (slug === 'widget-timeline-plaid-one-more-step') {
      const title = fields[1]?.fields?.label;
      const timelineSteps = fields[2]?.fields?.steps?.map((step) => {
        return {
          heading: step?.fields?.title?.fields?.label,
          text: step?.fields?.copy?.fields?.content?.content?.[0]?.content?.[0]
            ?.value,
        };
      });

      return {
        title,
        timelineSteps,
      };
    }
  }

  function getPaydayLoanTimelineData(slug: string) {
    return useAsyncData(
      `${slug}-payday-loan-timeline-data`,
      async () => {
        const fields = await getPaydayLoanTimeline(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getHeaderDark(slug: string) {
    const res = await getContentful(`pageWidgetHeader?fields.slug=${slug}`);

    const fields = res?.entries?.[0]?.fields?.find(
      (item) => item?.id === 'logos'
    )?.fields?.imagesSet;

    return {
      logoDesktop: fields[0]?.fields?.cloudinary[0]?.original_url,
    };
  }

  function getHeaderDarkData(slug: string) {
    return useAsyncData(
      `${slug}-loan-origination`,
      async () => {
        const fields = await getHeaderDark(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getHeaderMultiOffer(slug: string) {
    const res = await getContentful(`pageWidgetHeader?fields.slug=${slug}`);

    const fields = res?.entries?.[0]?.fields?.[3]?.fields?.labels;

    return {
      heading: fields?.[0].fields?.label || '',
      headingFinal: fields?.[1]?.fields?.label || '',
      label: fields?.[2]?.fields?.label || '',
    };
  }

  function getHeaderMultiOfferData(slug: string) {
    return useAsyncData(
      `${slug}-header-dark`,
      async () => {
        const fields = await getHeaderMultiOffer(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getLoanOriginationSummaryCard(slug: string) {
    const res = await getContentful(
      `pageWidgetSummaryCard?fields.slug=${slug}`
    );

    const fields = res?.entries?.[0]?.fields?.find(
      (item) => item?.id === 'labels'
    ).fields.labels;

    if (
      [
        'widget-summary-refinance-status-scheduled',
        'widget-summary-refinance-status-complete',
      ].includes(slug)
    ) {
      const keyValues = [
        fields[0]?.fields?.label,
        fields[1]?.fields?.label,
        fields[2]?.fields?.label,
      ];
      return {
        ...fields,
        keyValues,
      };
    }
    if (
      [
        'widget-card-refinance-title-loan',
        'widget-card-refinance-installment-loan',
        'widget-card-refinance-payday-loan',
      ].includes(slug)
    ) {
      return {
        ...fields,
      };
    }

    const keyValues = [
      fields[2]?.fields?.label,
      fields[3]?.fields?.label,
      fields[4]?.fields?.label,
      fields[5]?.fields?.label,
    ];

    return {
      ...fields,
      keyValues,
    };
  }

  function getLoanOriginationSummaryCardData(slug: string) {
    return useAsyncData(
      `${slug}-loan-origination`,
      async () => {
        const fields = await getLoanOriginationSummaryCard(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  function getPreferenceData(slug: string) {
    return useAsyncData(
      `${slug}-preference-data`,
      async () => {
        const fields = await getPreference(slug);
        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getCta(slug: string) {
    const mapLabelToRoute = useCtaRoute();

    const res = await getContentful(`pageWidgetCta?fields.slug=${slug}`);
    const fields = res?.entries?.[0]?.fields;
    const ctaList = fields?.[1]?.fields?.ctaList.map((cta) => ({
      label: cta.fields.label,
      url: mapLabelToRoute.mapCtaRoutes(cta.fields.label),
    }));
    return {
      ctaList,
    };
  }

  function getCtaData(slug: string) {
    return useAsyncData(
      `${slug}-cta-data`,
      async () => {
        const fields = await getCta(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getLoanCards(slug: string) {
    const res = await getContentful(`pageWidgetLoanCards?fields.slug=${slug}`);

    const fields = res?.entries?.[0]?.fields?.find(
      (item) => item?.id === 'cards'
    ).fields?.cards;

    const data = [];
    fields.forEach((item) => {
      data.push({
        title: item.fields.title.fields.label,
        description:
          item.fields.description.fields.content.content[0].content[0].value,
        header: item.fields.header,
      });
    });

    if (
      slug === 'widget-cards-loan-origination-payday-loan-manage-debit-card'
    ) {
      const linkLabel = res?.entries?.[0]?.fields?.find(
        (item) => item?.id === 'labels'
      ).fields?.labels[0].fields.label;

      return {
        data,
        linkLabel,
      };
    }
    return {
      ...data,
    };
  }

  function getLoanCardsData(slug: string) {
    return useAsyncData(
      `${slug}-loan-origination`,
      async () => {
        const fields = await getLoanCards(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getDigitalWalletCards(slug: string) {
    const res = await getContentful(
      `pageWidgetDigitalWallet?fields.slug=${slug}`
    );
    const cardsList = res?.entries?.[0]?.fields
      ?.find((item) => item?.id === 'cards')
      .fields?.cards.map((card) => ({
        paymentCardTitle: card?.fields?.title?.fields?.label,
        paymentMethodType:
          card?.fields?.debitCardLabel?.fields?.label ||
          card?.fields?.bankAccountLabel?.fields?.label,
        securingLoanLabel: card?.fields?.securingLoanLabel?.fields?.label || '',
        expiredLabel: card?.fields?.expiredLabel?.fields?.label || '',
        editLabel: card?.fields?.editCta?.fields?.label || '',
        activeLabel: card?.fields?.activeLabel?.fields?.label || '',
      }));
    const addDebitCardLabel = res?.entries?.[0]?.fields?.find(
      (item) => item?.id === 'addDebitCardCta'
    )?.fields?.label;

    return {
      cardsList,
      addDebitCardLabel,
    };
  }

  function getDigitalWalletCardsData(slug: string) {
    return useAsyncData(
      `${slug}-digital-wallet-account-details`,
      async () => {
        const fields = await getDigitalWalletCards(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getPlaidCardsManual(slug: string) {
    const res = await getContentful(`pageWidgetPlaidCard?fields.slug=${slug}`);
    const fields = res?.entries?.[0];

    const title = fields.fields?.find((item) => item?.id === 'title')?.fields
      ?.label;
    const description = fields.fields?.find(
      (item) => item?.id === 'description'
    )?.fields?.content?.content[0]?.content[0]?.value;
    const accordionLabel = fields.fields?.find(
      (item) => item?.id === 'description'
    )?.fields?.content?.content[1]?.content[0]?.value;
    const icon = fields.fields?.find((item) => item?.id === 'images')?.fields
      ?.images[1]?.fields?.cloudinary[0]?.original_url;
    const iconAlt = fields.fields?.find((item) => item?.id === 'images')?.fields
      ?.images[1]?.internalName;
    const accordionRaw = fields.fields?.find(
      (item) => item?.id === 'description'
    )?.fields?.content?.content[2]?.content[0]?.value;
    const accordionContent = accordionRaw.split(/[\n]/);

    return {
      accordionContent,
      accordionLabel,
      description,
      icon,
      iconAlt,
      title,
    };
  }

  function getPlaidCardManualData(slug: string) {
    return useAsyncData(
      `${slug}-plaid-card`,
      async () => {
        const fields = await getPlaidCardsManual(slug);
        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getImages(slug: string) {
    const res = await getContentful(`pageWidgetImage?fields.slug=${slug}`);
    const images = res?.entries?.[0]?.fields?.[1]?.fields?.imagesSet;

    return {
      mobile: {
        url: images?.[0]?.fields?.cloudinary?.[0]?.original_url,
        name: images?.[0]?.fields?.internalName,
      },
      desktop: {
        url: images?.[1]?.fields?.cloudinary?.[0]?.original_url,
        name: images?.[1]?.fields?.internalName,
      },
    };
  }

  function getImagesData(slug: string) {
    return useAsyncData(
      `${slug}-cta-data`,
      async () => {
        const fields = await getImages(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }
  async function getReferFriendCard(slug: string) {
    const res = await getContentful(
      `pageWidgetReferAFriend?fields.slug=${slug}`
    );

    const fields = res?.entries[0]?.fields[1]?.fields;

    const title = fields?.title?.fields?.label;
    const copy = fields?.copy?.fields?.content?.content[0]?.content[0]?.value;
    const btnLabel = fields?.cardCta?.fields?.label;
    const backgroundSrc = fields?.cardImage.fields?.cloudinary[0]?.original_url;

    return {
      title,
      copy,
      btnLabel,
      backgroundSrc,
    };
  }

  function getReferFriendCardData(slug: string) {
    return useAsyncData(
      `${slug}-refer-a-friend-card-data`,
      async () => {
        const fields = await getReferFriendCard(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getNotificationSlider(slug: string) {
    const res = await getContentful(
      `pageWidgetNotificationSlider?fields.slug=${slug}`
    );

    const fields = res?.entries?.[0]?.fields;
    return {
      linkTitle: fields[1]?.fields?.label,
      sectionTitle: fields[2]?.fields?.label,
    };
  }

  function getNotificationsSliderData(slug: string) {
    return useAsyncData(
      `${slug}-notification-card-slider-data`,
      async () => {
        const fields = await getNotificationSlider(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }

  async function getMoneyCardSlider(slug: string) {
    const res = await getContentful(
      `pageWidgetMoneyCardSlider?fields.slug=${slug}`
    );

    const cardsFields = res?.entries?.[0]?.fields?.find(
      (item) => item?.id === 'cards'
    ).fields?.cards;

    const titleFields = res?.entries?.[0]?.fields?.find(
      (item) => item?.id === 'title'
    )?.fields;

    const cards = [];
    cardsFields[0]?.fields?.cards?.forEach((item) => {
      cards.push({
        cardType: item?.fields?.cardType?.fields?.label,
        copy: item.fields?.copy?.fields?.content?.content[0]?.content[0]?.value,
        dataTestId: `${item?.fields?.cardType?.fields?.label}-card`,
        logo: item?.fields?.logo?.fields?.cloudinary[0]?.original_url || '',
        logoAlt: item?.fields?.logo?.fields?.internalName,
        title: item?.fields?.title?.fields?.label,
      });
    });

    return {
      cards,
      sectionTitle: titleFields?.label,
    };
  }

  function getMoneyCardSliderData(slug: string) {
    return useAsyncData(
      `${slug}-money-card-slider-data`,
      async () => {
        const fields = await getMoneyCardSlider(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }
  async function getLoanEligibilityCard(slug: string) {
    const res = await getContentful(
      `pageWidgetLoanEligibilityCard?fields.slug=${slug}`
    );
    const fields = res?.entries[0]?.fields[1]?.fields;

    const title = fields?.title?.fields?.label;
    const copy = fields?.copy?.fields?.content?.content[0]?.content[0]?.value;
    const btnLabel = fields?.cardCta?.fields?.label;
    const backgroundSrc =
      fields?.cardImage?.fields?.cloudinary[0]?.original_url;
    return {
      title,
      copy,
      btnLabel,
      backgroundSrc,
    };
  }

  function getLoanEligibilityCardData(slug: string) {
    return useAsyncData(
      `${slug}-loan-eligibility-card-data`,
      async () => {
        const fields = await getLoanEligibilityCard(slug);

        return {
          ...fields,
        };
      },
      { server: false }
    );
  }
  return {
    getApplicationFooterData,
    getContactInfoData,
    getCtaData,
    getDescriptionData,
    getDigitalWalletCardsData,
    getDisclosureData,
    getFormData,
    getFormSubmitData,
    getGlobalFooterData,
    getGlobalHeaderData,
    getHeaderDarkData,
    getHeaderData,
    getHeaderMultiOfferData,
    getHeaderZipcode,
    getImagesData,
    getLoanCardsData,
    getLoanOriginationSummaryCardData,
    getModalInfoData,
    getModalTermsAndConditions,
    getMyDocumentsInfoData,
    getSummaryData,
    getPaydayLoanTimelineData,
    getPlaidCardManualData,
    getPreferenceData,
    getMoneyCardSliderData,
    getNotificationsSliderData,
    getReferFriendCardData,
    getLoanEligibilityCardData,
  };
};
