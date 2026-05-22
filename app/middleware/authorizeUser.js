export const authorizeUser = (permittedRoles) => {
    return (req, res, next) => {
        if (!req.role) {
            return res.status(401).json({ error: 'Role information missing' });
        }
        if (!permittedRoles.includes(req.role)) {
            return res.status(403).json({ error: 'You do not have permission to access this' });
        }
        next();
    };
};