import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './css/FAQCollapseMenu.css'
const FAQCollapseMenu = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="faq">
    <Accordion  className="faq-collapse-menu-container" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
       
      >
      <p className="px-2">
            چرا احراز هویت لازم است؟
      </p>
      
      </AccordionSummary>
      <AccordionDetails>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </AccordionDetails>
      </Accordion>
    <Accordion  className="faq-collapse-menu-container" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
       
      >
      <p className="px-2">
            ساعات کاری تترریال  به چه صورت است؟
      </p>
      
      </AccordionSummary>
      <AccordionDetails>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </AccordionDetails>
      </Accordion>
    
    <Accordion  className="faq-collapse-menu-container" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header"
       
      >
      <p className="px-2">
      آیا در نقد کردن درآمد ارزی محدودیتی وجود دارد؟
      </p>
      
      </AccordionSummary>
      <AccordionDetails>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </AccordionDetails>
      </Accordion>
    <Accordion  className="faq-collapse-menu-container" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4bh-content"
        id="panel4bh-header"
       
      >
      <p className="px-2">
      احراز هویت حساب کاربری و تایید مدارک چقدر زمان می‌برد؟
      </p>
      
      </AccordionSummary>
      <AccordionDetails>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </AccordionDetails>
      </Accordion>
    <Accordion  className="faq-collapse-menu-container" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}
        aria-controls="panel5bh-content"
        id="panel5bh-header"
       
      >
      <p className="px-2">
        خدمات تترریال  چیست؟
      </p>
      
      </AccordionSummary>
      <AccordionDetails>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </AccordionDetails>
      </Accordion>

     
      
    </div>
  );
};

export default FAQCollapseMenu;
