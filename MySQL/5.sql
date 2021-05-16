SELECT USER_NAME,
if(IS_VENDOR, 'vendor', 'client') AS ROLE
FROM bali.USERS