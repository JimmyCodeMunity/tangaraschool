import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const coreValues = [
    { id: 1, name: "Professionalism and Excellence" },
    { id: 2, name: "Honesty and Integrity" },
    { id: 3, name: "Transparency and Accountability" },
    { id: 4, name: "Diligence and Timeliness" },
    { id: 5, name: "Innovation and Creativity" },
    { id: 6, name: "Sensitivity to Cultural Diversity" },
];

const objectives = [
    { id: 1, name: "To improve access to and quality of mental health services" },
    { id: 2, name: "To strengthen mental health referral system" },
    { id: 3, name: "To improve mental health education" },
    { id: 4, name: "To foster collaboration among all who are concerned with medical, psychological, socio-cultural, and legal aspects of mental health and illness" },
    { id: 5, name: "To improve functioning of MENTHEAL in the service of its mission" },
];

const workEthicsAndCulture = [
    { id: 1, name: "We believe in an integrated and participatory approach to consultancy and seek to understand the realities of the environment our clients operate in." },
    { id: 2, name: "We aspire to forge long-term linkages and partnerships with our clients in the belief that this is the only way to really appreciate and minister to their needs." },
    { id: 3, name: "We are totally committed to professionalism in all our engagements." },
    { id: 4, name: "We work closely with caregivers through technical support and education to ensure that they stay balanced." },
    { id: 5, name: "We strive to be accountable for the well-being of our entire community: people in need, families, partners, and volunteers." },
];




function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ValueTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="w-full flex flex-col justify-center items-center">
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Our Core Values" sx={{ fontWeight: 'black',fontFamily:'poppins', fontSize: '16px', color: '#060331FF' }}  {...a11yProps(0)} />
                    <Tab label="Our Objectives" sx={{ fontWeight: 'black',fontFamily:'poppins', fontSize: '16px', color: '#060331FF' }} {...a11yProps(1)} />
                    <Tab label="Work Ethics and Culture" sx={{ fontWeight: 'black',fontFamily:'poppins', fontSize: '16px', color: '#060331FF' }} {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <ul class="space-y-3">
                    {
                        coreValues.map((value) => {
                            return (
                                <li class="text-body-color dark:text-dark-6 flex text-base">
                                    <span class="text-primary mr-2.5 mt-0.5">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_980_24852)">
                                                <path
                                                    d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M12.6875 7.09375L8.96875 10.7188L7.28125 9.0625C7 8.78125 6.5625 8.8125 6.28125 9.0625C6 9.34375 6.03125 9.78125 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2813 8.96875 12.2813C9.21875 12.2813 9.46875 12.1875 9.65625 12L13.6875 8.125C13.9688 7.84375 13.9688 7.40625 13.6875 7.125C13.4063 6.84375 12.9688 6.84375 12.6875 7.09375Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_980_24852">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    {value.name}
                                </li>

                            )
                        })
                    }


                </ul>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <ul class="space-y-3">
                    {
                        objectives.map((value) => {
                            return (
                                <li class="text-body-color dark:text-dark-6 flex text-base">
                                    <span class="text-primary mr-2.5 mt-0.5">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_980_24852)">
                                                <path
                                                    d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M12.6875 7.09375L8.96875 10.7188L7.28125 9.0625C7 8.78125 6.5625 8.8125 6.28125 9.0625C6 9.34375 6.03125 9.78125 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2813 8.96875 12.2813C9.21875 12.2813 9.46875 12.1875 9.65625 12L13.6875 8.125C13.9688 7.84375 13.9688 7.40625 13.6875 7.125C13.4063 6.84375 12.9688 6.84375 12.6875 7.09375Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_980_24852">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    {value.name}
                                </li>

                            )
                        })
                    }


                </ul>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <ul class="space-y-3">
                    {
                        workEthicsAndCulture.map((value) => {
                            return (
                                <li class="text-body-color dark:text-dark-6 flex text-base">
                                    <span class="text-primary mr-2.5 mt-0.5">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_980_24852)">
                                                <path
                                                    d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M12.6875 7.09375L8.96875 10.7188L7.28125 9.0625C7 8.78125 6.5625 8.8125 6.28125 9.0625C6 9.34375 6.03125 9.78125 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2813 8.96875 12.2813C9.21875 12.2813 9.46875 12.1875 9.65625 12L13.6875 8.125C13.9688 7.84375 13.9688 7.40625 13.6875 7.125C13.4063 6.84375 12.9688 6.84375 12.6875 7.09375Z"
                                                    fill="#724B62"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_980_24852">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    {value.name}
                                </li>

                            )
                        })
                    }


                </ul>
            </CustomTabPanel>
        </Box>
    );
}