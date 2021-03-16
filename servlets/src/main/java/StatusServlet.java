import java.io.*;
import javax.servlet.http.*;

public class StatusServlet extends HttpServlet {
    private static final String  MESSAGE = "Application Is Running";

@Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();
        out.println("<h1>" + MESSAGE + "</h1>");
    }
}
