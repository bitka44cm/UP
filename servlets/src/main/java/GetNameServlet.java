import java.io.*;
import javax.servlet.http.*;

public class GetNameServlet extends HttpServlet {
    private static final String  MESSAGE = "Name is ";

@Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");

        String name = request.getParameter("name");
        PrintWriter out = response.getWriter();
        if (name.length() < 100) {
            out.println("<h1>" + MESSAGE + name + "</h1>");
        } else {
            throw new IOException("name is long");
        }
    }
}
