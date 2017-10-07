'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var faqValues = [{
    caption: 'General questions',
    data: [{
        caption: 'What investment offer company provides?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'What is minimum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'What is maximum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'What payment methods can i use?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How to make a deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How long will take the activation of deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Can i make an additional top-up to the existing deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How does income accrue?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Does interest income accrued daily?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'What is the process of making a profit for the company and investors?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }]
}, {
    caption: 'Investment &accruals',
    data: [{
        caption: '2What investment offer company provides?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '2What is minimum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '2What is maximum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '2What payment methods can i use?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '2How to make a deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How long will take the activation of deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Can i make an additional top-up to the existing deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How does income accrue?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Does interest income accrued daily?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'What is the process of making a profit for the company and investors?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }]
}, {
    caption: 'Withdraw money',
    data: [{
        caption: '3What investment offer company provides?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '3What is minimum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '3What is maximum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '3What payment methods can i use?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How to make a deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How long will take the activation of deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Can i make an additional top-up to the existing deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How does income accrue?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Does interest income accrued daily?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'What is the process of making a profit for the company and investors?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }]
}, {
    caption: 'Partnership program',
    data: [{
        caption: '4What investment offer company provides?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '4What is minimum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '4What is maximum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '4What payment methods can i use?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '4How to make a deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How long will take the activation of deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Can i make an additional top-up to the existing deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How does income accrue?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Does interest income accrued daily?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'What is the process of making a profit for the company and investors?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }]
}, {
    caption: 'Security account',
    data: [{
        caption: '5What investment offer company provides?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '5What is minimum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '5What is maximum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '5What payment methods can i use?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How to make a deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How long will take the activation of deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Can i make an additional top-up to the existing deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How does income accrue?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Does interest income accrued daily?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'What is the process of making a profit for the company and investors?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }]
}, {
    caption: 'Legal aspect',
    data: [{
        caption: '6What investment offer company provides?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '6What is minimum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '6What is maximum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '6What payment methods can i use?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How to make a deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How long will take the activation of deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Can i make an additional top-up to the existing deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How does income accrue?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Does interest income accrued daily?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'What is the process of making a profit for the company and investors?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }]
}, {
    caption: 'Account info',
    data: [{
        caption: '7What investment offer company provides?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '7What is minimum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '7What is maximum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '7What payment methods can i use?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '7How to make a deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How long will take the activation of deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Can i make an additional top-up to the existing deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How does income accrue?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Does interest income accrued daily?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'What is the process of making a profit for the company and investors?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }]
}, {
    caption: 'other Support',
    data: [{
        caption: '8What investment offer company provides?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '8What is minimum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '8What is maximum amount to invest?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '8What payment methods can i use?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: '8How to make a deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How long will take the activation of deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Can i make an additional top-up to the existing deposit?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'How does income accrue?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'Does interest income accrued daily?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }, {
        caption: 'What is the process of making a profit for the company and investors?',
        text: ['All referral rewards are charged automatically, as well as payments on them. Accordingly, the system automatically determines the currency in which you will be credited with your reward, and will be withdrawn to the same payment system which your referral used to make a deposit.', 'Please note that if your account does not contain billing details of the electronic payment system, wich your referral used to make deposit, then the system will not be able to pay out funds in your wallet because of physical absence of your payment details in the system database. Therefore, we encourage you to contact our support team to add a new account in your payment details, or directly check after registration all purses details preventively.']
    }]
}];

var img = ['img/faq/general.png', 'img/faq/investment.png', 'img/faq/withdraw.png', 'img/faq/partnership.png', 'img/faq/security.png', 'img/faq/legal.png', 'img/faq/acc_info.png', 'img/faq/other_support.png'];

var TabWidget = function (_React$Component) {
    _inherits(TabWidget, _React$Component);

    function TabWidget(props) {
        _classCallCheck(this, TabWidget);

        var _this = _possibleConstructorReturn(this, (TabWidget.__proto__ || Object.getPrototypeOf(TabWidget)).call(this, props));

        _this.state = { items: _this.props.data, selected: 0, toggleList: _this.props.data[0].data };
        _this.switchTab = _this.switchTab.bind(_this);
        return _this;
    }

    _createClass(TabWidget, [{
        key: 'switchTab',
        value: function switchTab(tabIndex) {
            var newList = this.props.data[tabIndex].data;
            this.setState({ selected: tabIndex, toggleList: newList });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { className: 'react_TabWidget' },
                React.createElement(
                    'div',
                    { className: 'tabs' },
                    this.props.data.map(function (item, index) {
                        return React.createElement(TabItem, {
                            key: 'tab' + index,
                            index: index,
                            caption: item.caption,
                            selected: index == _this2.state.selected ? 'selected' : '',
                            'switch': _this2.switchTab,
                            img: _this2.props.tabIcons[index] });
                    })
                ),
                React.createElement(ToggleItemsList, { data: this.state.toggleList, opened: -1 })
            );
        }
    }]);

    return TabWidget;
}(React.Component);

var TabItem = function (_React$Component2) {
    _inherits(TabItem, _React$Component2);

    function TabItem(props) {
        _classCallCheck(this, TabItem);

        var _this3 = _possibleConstructorReturn(this, (TabItem.__proto__ || Object.getPrototypeOf(TabItem)).call(this, props));

        _this3.state = { selected: _this3.props.selected, tabData: _this3.props.tabData };
        _this3.sendKey = _this3.sendKey.bind(_this3);
        return _this3;
    }

    _createClass(TabItem, [{
        key: 'sendKey',
        value: function sendKey() {
            this.props.switch(this.props.index);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ selected: nextProps.selected });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'react_TabItem ' + this.state.selected, onClick: this.sendKey },
                React.createElement('img', { src: this.props.img }),
                React.createElement(
                    'div',
                    { className: this.state.selected },
                    this.props.caption
                )
            );
        }
    }]);

    return TabItem;
}(React.Component);

var ToggleItemsList = function (_React$Component3) {
    _inherits(ToggleItemsList, _React$Component3);

    function ToggleItemsList(props) {
        _classCallCheck(this, ToggleItemsList);

        var _this4 = _possibleConstructorReturn(this, (ToggleItemsList.__proto__ || Object.getPrototypeOf(ToggleItemsList)).call(this, props));

        _this4.state = { items: _this4.props.data, opened: _this4.props.opened };
        _this4.toggle = _this4.toggle.bind(_this4);
        return _this4;
    }

    _createClass(ToggleItemsList, [{
        key: 'toggle',
        value: function toggle(index) {
            var newIndex = index == this.state.opened ? -1 : index;
            this.setState({ opened: newIndex });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ items: nextProps.data, opened: nextProps.opened });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'ul',
                { className: this.props.class },
                this.state.items.map(function (item, index) {
                    return React.createElement(ToggleItem, {
                        key: 'list' + index,
                        index: index,
                        caption: item.caption,
                        text: item.text,
                        'class': index == _this5.state.opened ? 'opened' : 'closed',
                        toggler: _this5.toggle });
                })
            );
        }
    }]);

    return ToggleItemsList;
}(React.Component);

var ToggleItem = function (_React$Component4) {
    _inherits(ToggleItem, _React$Component4);

    function ToggleItem(props) {
        _classCallCheck(this, ToggleItem);

        var _this6 = _possibleConstructorReturn(this, (ToggleItem.__proto__ || Object.getPrototypeOf(ToggleItem)).call(this, props));

        _this6.state = { class: _this6.props.class };
        _this6.sendKey = _this6.sendKey.bind(_this6);
        return _this6;
    }

    _createClass(ToggleItem, [{
        key: 'sendKey',
        value: function sendKey() {
            this.props.toggler(this.props.index);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ class: nextProps.class });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'li',
                null,
                React.createElement('span', { onClick: this.sendKey, className: 'toggle_trigger ' + this.state.class }),
                React.createElement(
                    'span',
                    { className: 'toggle-item-caption' },
                    this.props.caption
                ),
                React.createElement(
                    'div',
                    { className: this.state.class },
                    this.props.text.map(function (item, index) {
                        return React.createElement(
                            'p',
                            { key: 'paragraph' + index },
                            item
                        );
                    })
                )
            );
        }
    }]);

    return ToggleItem;
}(React.Component);

ReactDOM.render(React.createElement(TabWidget, { data: faqValues, tabIcons: img }), document.querySelector(".reactTabWidget"));
