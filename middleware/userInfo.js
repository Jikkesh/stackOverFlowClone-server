import requestIp from "request-ip";
import userAgent from "express-useragent";

const userInformation = async (req , res ,next) => {
    const clientIp = requestIp.getClientIp(req); 
    try {
        const userData = userAgent.parse(req.headers['user-agent']);
        const ipAddress = clientIp
        const browser = userData.browser;
        const browserVersion = userData.version;
        const device = userData.isMobile ? 'Mobile' : 'Desktop';
        const os = userData.os;

        req.userInfo = {ipAddress , browser , browserVersion , device , os}
        
        next();

    } catch (error) {
         console.error('Error fetching User data:', error);
        console.log('Internal server error in Locaton MW' );
    }
}


export default userInformation;